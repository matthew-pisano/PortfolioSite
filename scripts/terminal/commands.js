import { Permissions as Perms, SysEnv } from '../utils';
import { Directory, File, masterFileSystem, pageRegistry, pathJoin } from '../fileSystem';
import { resolveTokens, resolvePath, tokenizeCommand, Help, eightBall, haltingProblem, toVoid, neofetch, closeTerminal } from './commandResources';


class Commands {

    static ENV = {};

    static resolvePath(path) { return resolvePath(this.ENV.CWD, path); }

    static validateArgs(args, val) {
        if(val.nargs !== undefined &&  !val.nargs.includes(args.length)) 
            return `Only ${val.nargs} arguments are accepted, found ${args.length}`;

        return "";
    }

    static echo(args) {
        if(args[0] === "--help") return Help.echo;

        let echoed = "";
        for(let i=0; i<args.length; i++) echoed += args[i]+"\n";
        return echoed;
    }

    static cls(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        document.getElementById("terminalOutput").innerText = "";
        return "";
    }
    static clear(args){ return this.cls(args); }

    static pwd(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        return this.ENV.CWD;
    }

    static help(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0, 1]});
        if(valResult) return valResult;

        if(args.length > 0 && (args[0] === "-f" || args[1] === "--force"))
            return helpMsg+"\n"+forceHelp+"\n";

        return helpMsg;
    }

    static cd(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0, 1]});
        if(valResult) return valResult;

        if(args.length === 0){
            this.ENV.CWD = SysEnv.HOME_FOLDER;
            return "";
        }
        args[0] = this.resolvePath(args[0]);
        let targetItem = masterFileSystem.getItem(args[0]);
        if(!targetItem) 
            throw new Error(`Cannot enter directory.  Directory at ${args[0]} does not exist!`);
        else if(targetItem.constructor === File)
            throw new Error(`Cannot enter ${args[0]}, it is a file!`);

        else if(!targetItem.permission.includes(Perms.EXECUTE))
            throw new Error(`Cannot enter ${args[0]}.  Permission denied!`);
        
        this.ENV.CWD = args[0];
        return "";
    }

    static ls(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0, 1]});
        if(valResult) return valResult;

        if(args.length === 0) args = [this.ENV.CWD];
        
        let path = this.resolvePath(args[0]);
        let lsObj = masterFileSystem.getItem(path);
        if(!lsObj) throw new Error(`Cannot list file or directory.  File or directory at ${args[0]} does not exist!`);

        let pad = "\xa0\xa0";

        let lsStr;

        if(lsObj.constructor === Directory){
            if(!lsObj.permission.includes(Perms.READ)) throw new Error(`Cannot list ${path}.  Permission denied!`);

            let list = [];
            for(let child of lsObj.subTree){
                if(child.constructor === File) {
                    list.push([this.ls([pathJoin(path, child.name)]), child.name]);
                    continue;
                }

                let modStr = new Date(lsObj.modified).toISOString().split("T").join(" ");
                modStr = modStr.substring(0, modStr.lastIndexOf(":"));
                let paddedSize = `${lsObj.size()}`.padStart(6, "");

                list.push([`d${child.permission}${pad}${paddedSize}${pad}${modStr}${pad}${child.name}`, child.name]);
            }
            
            list.sort((a, b) => a[1].localeCompare(b[1]));

            lsStr = "total "+lsObj.subTree.length+"\n";

            for(let entry of list)
                lsStr += entry[0]+"\n";
        }
        else {
            let modStr = new Date(lsObj.modified).toISOString().split("T").join(" ");
            modStr = modStr.substring(0, modStr.lastIndexOf(":"));
            let paddedSize = `${lsObj.size()}`.padStart(6, "");
            if(!lsObj.permission.includes(Perms.READ)) paddedSize = "?".padStart(6, "")

            lsStr = `-${lsObj.permission}${pad}${paddedSize}${pad}${modStr}${pad}${lsObj.name}`;
        }
        return lsStr;
    }

    static mkdir(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let newPath = this.resolvePath(args[0]);
        
        if(masterFileSystem.exists(newPath))
            throw new Error(`Directory ${newPath} already exists!`);
            
        // common.newFile(newName);
        masterFileSystem.mkdir(newPath);
        return "";
    }

    static touch(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let newPath = this.resolvePath(args[0]);
        
        if(masterFileSystem.exists(newPath))
            throw new Error(`File ${newPath} already exists!`);
            
        // common.newFile(newName);
        masterFileSystem.touch(newPath);
        return "";
    }

    static cp(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [2]});
        if(valResult) return valResult;

        let oldPath = this.resolvePath(args[0]);
        let oldName = oldPath.substring(oldPath.lastIndexOf("/")+1);
        let newPath = this.resolvePath(args[1]);

        if(newPath === oldPath) throw new Error(`${oldPath} ${newPath} are at the same location!`);
        
        // let oldObj = masterFileSystem.getItem(oldPath);
        let newObj = masterFileSystem.getItem(newPath);
        
        if(newObj && newObj.constructor === Directory) 
            masterFileSystem.cp(oldPath, pathJoin(newPath, oldName));
        else if(!newObj)
            masterFileSystem.cp(oldPath, newPath);
        else if(newObj && newObj.constructor === File)
            throw new Error(`File at ${newPath} already exists!`);
        else throw new Error(`Cannot copy directory at ${oldPath} to file at ${newPath}!`);

        return "";
    }

    static mv(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [2]});
        if(valResult) return valResult;

        this.cp(args);
        
        let oldPath = this.resolvePath(args[0]);
        // let newPath = this.resolvePath(args[1]);
        masterFileSystem.rm(oldPath);
        return "";
    }

    static rm(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let fileName = this.resolvePath(args[0]);
        masterFileSystem.rm(fileName);

        return "";
    }

    static cat(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        return masterFileSystem.readText(this.resolvePath(args[0]));
    }

    static open(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        let pagePath = this.resolvePath(args[0]);
        console.log(pageRegistry, pagePath);
        if(pageRegistry[pagePath]){
            let relPath = pagePath.replace(SysEnv.PUBLIC_FOLDER, "");
            window.open(relPath.replace(".html", ""), '_self', false);
        }
        else throw new Error(`Cannot open ${args[0]}.  This is not a valid page!`);

        return "";
    }

    static color(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        if(args[0].match(/#[0-9|a-f|A-F]{6}/) || args[0].match(/#[0-9|a-f|A-F]{3}/))
            this.ENV.COLOR = args[0];
        else throw new Error(`${args[0]} is not a valid color!`);

        return `Set terminal color to ${args[0]}`;
    }

    static exit(args) {
        if(args[0] === "--help") return "";
        closeTerminal();
        document.getElementById("terminalOutput").innerText = "";

        this.ENV.CLOSED = true;
        this.ENV.CLOSE_TIME = Date.now();

        return "";
    }

    static restart(args) {
        if(args[0] === "--help") return "";
        window.location.reload();
    }

    static reset(args) {
        if(args[0] === "--help") return "";
        delete localStorage.hierarchy;
    }
    static nuke(args) { return this.reset(args); }

    static dir(args) {
        if(args[0] === "--help") return "";
        return "'dir: command not found (Wrong OS)";
    }

    static mir(args) {
        if(args[0] === "--help") return "";
        return "mir: command not found (Like 'dir' or the space station?)";
    }

    static launch(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [3]});
        if(valResult) return valResult;

        return "Insufficient permissions to cause armageddon (Did you try 'sudo'?)";
    }

    static sudo(args) {
        if(args[0] === "--help") return "";
        return "sudo is just bloat (Maybe try 'doas'?)";
    }

    static doas(args) {
        if(args[0] === "--help") return "";
        return "Did you mean to type 'does'?";
    }

    static haltingproblem(args) {
        if(args[0] === "--help") return "";
        haltingProblem();
        return "";
    }

    static eightball(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [1]});
        if(valResult) return valResult;

        return eightBall();
    }

    static neofetch(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        return neofetch.replace(new RegExp(' ', 'g'), '\u00A0');
    }

    static whoami(args) {
        if(args[0] === "--help") return "";
        let valResult = this.validateArgs(args, {nargs: [0]});
        if(valResult) return valResult;

        return "guest";
    }

    static void(args) {
        if(args[0] === "--help") return "";
        toVoid();
        return "";
    }

}

function parseCommand(rawString, env){
    Commands.ENV = env;

    let commandStrings = rawString.split(";");
    let cmdOutput = {result: "", env: Commands.ENV};;

    for(let commandString of commandStrings){
        if(!commandString) continue;

        try{
            let tokens = tokenizeCommand(commandString);
            resolveTokens(tokens);
            let command = tokens[0];
            let args = tokens.slice(1)

            if(!command) continue;

            let outPath = undefined;

            if(args.includes(">")){
                if(args.indexOf(">") === args.length-1)
                    throw new Error("You must include a file to write to!");

                outPath = resolvePath(env.CWD, args.slice(args.indexOf(">")+1)[0]);

                args = args.slice(0, args.indexOf(">"))
            }

            let commandFunc = Commands[command];
            if(!commandFunc) throw new Error(command+": command not found");

            let tmpOutput = commandFunc(args);

            if(outPath)
                masterFileSystem.writeText(outPath, tmpOutput);
            else
                cmdOutput.result += (cmdOutput.result ? "\n" : "") + tmpOutput;

        }catch(e){cmdOutput.result += (cmdOutput.result ? "\n" : "") + e.message;}

        cmdOutput.env = Commands.ENV;
    }

    return cmdOutput;
}


export {resolvePath, parseCommand, closeTerminal};