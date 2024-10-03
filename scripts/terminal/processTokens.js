
/**
 * Tokenizes a command string into an array of tokens
 * @param command {string} The command string to tokenize
 * @return {string[][]} The array of tokens
 */
function tokenizeCommand(command) {
    let tokens = [[]];
    let activeToken = "";
    let quoteType = null;

    for (let char of command) {
        if (quoteType === null) {
            if (char === "#") break;  // Ignore comments

            if (`'"`.includes(char)) {  // Open a quote
                quoteType = char;
                continue;
            }
            if (` ;`.includes(char)) {  // End the token/command
                if (activeToken !== "") tokens[tokens.length - 1].push(activeToken);
                activeToken = "";
                if (char === ";") tokens.push([]);  // Start a new command
                continue;
            }
        }
        if (quoteType !== null && char === quoteType) {  // Close a quote
            quoteType = null;
            continue;
        }

        activeToken += char;
    }
    if (activeToken !== "") tokens[tokens.length-1].push(activeToken);  // Add the last token

    return tokens;
}


/**
 * Resolves any environment variables or assignments in the tokens
 * @param rawTokens {string[]} The array of tokens to resolve
 * @param env {object} The environment object
 */
function resolveTokens(rawTokens, env) {
    let tokens = [...rawTokens];
    for(let i=0; i<tokens.length; i++) {
        tokens[i] = insertVars(env, tokens[i]);

        if(i === 0 && tokens[i].includes("=") && tokens[i][0] !== "=") {
            env = processAssignment(env, tokens[i]);  // Update the environment with the assignment/unassignment
            tokens.splice(i, 1);
            i--;
        }
    }
    return {tokens: tokens, env: env};
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
        // Terminate the variable if it's not a valid variable character or the end of the token
        if (varStart !== null && (!token[i].match(/[a-zA-Z0-9_]/) || i === token.length - 1)) {
            if (i === token.length - 1 && token[i].match(/[a-zA-Z0-9_]/)) i++;  // Include the token's last character if it's a valid variable character
            if (i === varStart + 1) {
                varStart = null;
                i--;  // Start the next loop at the same character (handles cases like $$var)
                continue;
            }

            let varName = token.substring(varStart + 1, i);
            let varValue = env[varName] ? env[varName] : "";
            token = token.replace("$" + varName, varValue);  // Replace the variable with its value
            i = varStart + varValue.length;  // Set to the end of the inserted variable
            varStart = null;
        }
        // Start a new variable if the character is a $
        if (token[i] === "$") varStart = i;
    }
    return token;
}


/**
 * Processes an assignment token and updates the environment
 * @param env {object} The environment object
 * @param token {string} The token to process
 * @returns newEnv: object The updated environment
 */
function processAssignment(env, token) {
    let newEnv = {...env};
    let variable = token.substring(0, token.indexOf("="));
    let value = token.substring(token.indexOf("=") + 1);
    if (!variable) return newEnv;  // Invalid assignment, fail silently

    if (!value) delete newEnv[variable];  // Unset the variable
    else newEnv[variable] = value;  // Set the variable

    return newEnv;
}

export { processAssignment, insertVars, tokenizeCommand, resolveTokens };
