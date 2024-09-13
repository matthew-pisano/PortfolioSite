/**
 * Tokenizes a command string into an array of tokens
 * @param command {string} The command string to tokenize
 * @return {string[][]} The array of tokens
 */
function tokenizeCommand(command) {
    let tokens = [[]];
    let activeToken = "";
    let quoteType = null;

    for (let i = 0; i < command.length; i++) {
        // Check to see if a quoted string has begun
        if (quoteType === null) {
            if (`"'`.includes(command[i]))
                quoteType = command[i];

            if (`"' `.includes(command[i])) {
                if (activeToken !== "") tokens[tokens.length-1].push(activeToken);
                activeToken = "";
                continue;
            }
        }
        // Complete string and push token when string terminates
        else if (command[i] === quoteType) {
            if (activeToken !== "") tokens[tokens.length-1].push(activeToken);
            activeToken = "";
            quoteType = null;
            continue;
        }

        if (quoteType === null && command[i] === ";") {
            if (activeToken !== "") tokens[tokens.length-1].push(activeToken);
            activeToken = "";
            tokens.push([]);
            continue;
        }

        // If string is active, add to the string
        if (command[i] !== quoteType)
            activeToken += command[i];
    }
    // Add new token to list
    if (activeToken !== "") tokens[tokens.length-1].push(activeToken);

    return tokens;
}


/**
 * Replaces any environment variables in the token with their values
 * @param env {object} The environment object
 * @param token {string} The token to replace variables in
 * @return {string} The token with variables replaced
 */
function insertVars(env, token) {
    let varStart = null;
    for (let i = 0; i < token.length; i++) {
        if (varStart !== null && (!token[i].match(/[a-zA-Z0-9_]/) || i === token.length - 1)) {
            if (i === token.length - 1 && token[i].match(/[a-zA-Z0-9_]/)) i++;  // Include the token's last character if it's a valid variable character
            if (i === varStart + 1) {
                varStart = null;
                i--;
                continue;
            }

            let varName = token.substring(varStart + 1, i);
            let varValue = env[varName] ? env[varName] : "";
            token = token.replace("$" + varName, varValue);
            i = varStart + varValue.length;  // Set to the end of the inserted variable
            varStart = null;
        }
        if (token[i] === "$") varStart = i;
    }
    return token;
}


/**
 * Processes an assignment token and updates the environment
 * @param env {object} The environment object
 * @param token {string} The token to process
 * @param nextToken {string} The next token in the command
 * @returns {{newEnv: object, remove: boolean, removeNext: boolean}} The updated environment and whether to remove the token and next token
 */
function processAssignment(env, token, nextToken) {
    let newEnv = {...env};
    let variable = token.substring(0, token.indexOf("="));
    let value = token.substring(token.indexOf("=") + 1);
    if (!variable) return {newEnv: newEnv, remove: false, removeNext: false};
    else if (!value) {
        if (!nextToken) delete newEnv[variable];
        else {
            newEnv[variable] = nextToken;
            return {newEnv: newEnv, remove: true, removeNext: true};
        }
    } else newEnv[variable] = value;

    return {newEnv: newEnv, remove: true, removeNext: false};
}

export { processAssignment, insertVars, tokenizeCommand };
