import {SysEnv} from "../utils";
import {pathJoin} from "../fileSystem/fileSystem";
import $ from "jquery";


const neofetch = `
   lWMMMMMMMMMWl        lWMMMMMMMMMWl       guest@mathesisConsole
 ,;kWMMMMMMMMMWk;,,  ,,;kWMMMMMMMMMWk;,     ---------------------
WWWMMMMMMMMMMMMMWWW  WWWMMMMMMMMMMMMMWWW    OS: ${SysEnv.OS} ${SysEnv.ARCH}
MMMMMMWKkkkKMMMMMMMMMMMMMMMMKkkkKWMMMMMM    Host: ████████
MMMMMMWl   lWMMMMMMMMMMMMMMWl   lWMMMMMM    kernel:${SysEnv.KERNEL}
MMMMMMWl   ,xkkKMMMMMMMMKkkx,   lWMMMMMM    Uptime: █████
MMMMMMWl       lWMMMMMMWl       lWMMMMMM    Packages: 443 (████), 24 (██)
MMMMMMWl       ,xkkkkkkx,       lWMMMMMM    Shell: ${SysEnv.SHELL}
MMMMMMWl                        lWMMMMMM    Terminal: cloudTerminal
MMMMMMWl       .,,,,,,,,.       lWMMMMMM    CPU: ██th Gen ██████ █-██
MMMMMMWl       lNWWWWWWNl       lWMMMMMM    Memory: ██████TiB / ██████TiB
MMMMMMWl       lWM    MWl       lWMMMMMM
MMMMMMWl       lWMMMMMMWl       lWMMMMMM
  kKMMWl       lWM    MWl       lWMMKk
   lWMWl       lWM    MWl       lWMWl   
   lWMWl       lWM    MWl       lWMWl`;


const rmRoot = `cannot remove /sys/module/printk/parameters/time': Operation not permitted
cannot remove '/sys/module/printk/parameters/console_suspend': Operation not permitted
cannot remove '/sys/module/printk/parameters/disable_printk_persistence': Operation not permitted
cannot remove '/sys/module/printk/parameters/ignore_loglevel': Operation not permitted
cannot remove '/sys/module/printk/parameters/printk_ratelimit': Operation not permitted
cannot remove '/sys/module/xen-wsfrontnt/parameters/ptr_size': Operation not permitted
cannot remove '/sys/module/watchdog/parameters/nowayout': Operation not permitted
cannot remove '/sys/module/watchdog/parameters/handle_boot_enabled': Operation not permitted
cannot remove '/sys/module/vxlan-core/parameters/tos': Operation not permitted
cannot remove '/sys/module/core/parameters/printk_ratelimit': Operation not permitted
cannot remove '/sys/module/debug_core/parameters/kgdbsb_boot': Operation not permitted
cannot remove '/sys/module/debug_core/parameters/kgdbgsb_boot': Operation not permitted
cannot remove '/sys/module/watchdog/parameters/watchdog_thresh': Operation not permitted
cannot remove '/sys/module/workqueue/parameters/watchdog_cpumask': Operation not permitted
cannot remove '/sys/module/workqueue/parameters/debug_force_rr_cpu': Operation not permitted
cannot remove '/var/log/hpnoaccess/sharedlog/spooLerrtfiLe8.7': Operation not permitted
cannot remove '/sys/module/ipldebug': Operation not permitted
cannot remove '/var/log/mount': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/nfsd/cb-ops': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/gssd/nfssvc/idmap': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/nfsd': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/nfrdTcp': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/nfscbP': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/nfsd_cb': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/auth': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/portmap': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/pipe': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/nfscon': Operation not permitted
cannot remove '/var/lib/nfs/rpc_pipefs/Locked': Operation not permitted
1: Journal file has been deleted, rotating
11: /var/log/journal/ab22c534fc84265babd1bdf98532f8/system.journal: No such file or directory
removing '/etc/systemd/system': Operation succeeded
removing '/usr/lib': Operation succeeded
removing '/bin': Operation succeeded
removing '/sbin': Operation succeeded
removing '/usr/local/bin': Operation succeeded
removing '/opt': Operation succeeded
removing '/home': Operation succeeded
removing '/root': Operation succeeded
removing '/var/log': Operation succeeded
removing '/var/spool': Operation succeeded
removing '/var/tmp': Operation succeeded
removing '/var/cache': Operation succeeded
removing '/var/lib/dpkg': Operation succeeded
removing '/var/run': Operation succeeded
removing '/proc': Operation succeeded
removing '/dev': Operation succeeded
removing '/sys': Operation succeeded
removing '/boot': Operation succeeded
removing '/lib': Operation succeeded
removing '/lib64': Operation succeeded
removing '/usr/share': Operation succeeded
removing '/usr/src': Operation succeeded
removing '/usr/include': Operation succeeded
removing '/usr/local/share': Operation succeeded
removing '/usr/local/lib': Operation succeeded
/dev/sdb5: clean, 399075/29605888 files, 15731001/118397169 blocks
[    4.397012] init[1]: segfault at 0 ip           (null) sp 00007fffc8e30628 error 14 in systemd[555524b43000+15c000]
[    4.397197] kernel panic - not syncing: Attempted to kill init! exitcode=0x0000000h
[    4.397199]
[    4.397228] CPU: 0 PID: 1 Comm: init Not tainted 4.13.0-38-generic #43~${SysEnv.OS}
[    4.397252] Hardware name: ${SysEnv.ARCH} E6520/0CVFY9, BIOS A20 05/12/2017
[    4.397274] Call Trace:
[    4.397290]  dump_stack+0x63/0x8b
[    4.397305]  panic+0xd4/0x24d
[    4.397317]  do_exit+0xaec/0xaf0
[    4.397330]  do_group_exit+0x43/0xb0
[    4.397345]  get_signal+0x296/0x5d0
[    4.397366]  ? signal+0x37/0xf30
[    4.397379]  ? pick_next_task_fair+0x449/0x570
[    4.397394]  ? __switch_to+0x13f/0x540
[    4.397408]  ? printk+0x52/0x6e
[    4.397420]  ? schedule+0x3de/0xbb0
[    4.397434]  exit_to_usermode_loop+0xd8/0xd0
[    4.397449]  prepare_exit_to_usermode+0x66/0x90
[    4.397464]  ? page_fault+0x35/0x60
[    4.397476]  retint_user+0xb/0xb
[    4.397487] HIT: 6693:
[    4.397500] RIP: 00007fffc8e30628 RFLAGS: 00010246
[    4.397516] RAX: 00007fef29a25ca0 RBX: 00007fef27f31cb0 RCX: 00007fef2981acf0
[    4.397537] RDX: 00007fffc8e30640 RSI: 00007fef2f311920 RDI: 00007fef2889f72e
[    4.397557] RBP: 00007fffc8e30740 R08: 00007fffc8e30680 R09: 00007fef2cddaf2c
[    4.397577] R10: 00007fef282c6850 R11: 0000000000000000 R12: 00007fef23a054c0
[    4.397597] R13: 00007fef27f11000 R14: 00007fef27f31fb0 R15: 0000000000b41159
[    4.397617] kernel.tmp/x86/entry_64.S:504 Code: 0e ff ff ff 80 00 00 00 00 0f ff ff ff bf ff ff ff
[    4.397681] ---[ end Kernel panic - not syncing: Attempted to kill init! exitcode=0x0000000h`;


function resolvePath(cwd, path){
    //console.log("Resolving", cwd, path);
    if(path[0] === "~") path = path.replace("~", SysEnv.HOME_FOLDER);
    return pathJoin(cwd, path).replace("//", "/");
}

function closeTerminal() {
    console.log("Closing terminal...");
    document.getElementById('terminal').style.height = `30px`;
    document.getElementById('terminalOutput').style.height = `0px`;
    $('#terminalBottom').invisible();
    $('#terminalClose').invisible();
}

async function haltingProblem(){
    let dots = 7;
    let terminalOutput = document.getElementById('terminalOutput');
    await new Promise(resolve => setTimeout(resolve, 250));
    terminalOutput.innerHTML += "Computing solution to halting problem";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    while(dots > 0){
        terminalOutput.innerHTML += ".";
        await new Promise(resolve => setTimeout(resolve, 500));
        dots --;
    }
    terminalOutput.innerHTML += "<br>Operation completed successfully!<br>Printing solution...";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    await new Promise(resolve => setTimeout(resolve, 1500));
    terminalOutput.innerHTML += "<br>Segmentation fault (core dumped)";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function eightBall(){
    let responses = [
        "It is certain", "Without a doubt", "Yes definitely", "You may rely on it",
        "Most likely", "Outlook not installed", "Signs point to yes", "Hmmmmm...", "Reply hazy, try again",
        "Ask again later", "404, response not found", "Better not tell you now", "Cannot predict now",
        "Enrich 95% Uranium 235 and try again", "Don't count on it", "My reply is no", "have you tried sudo?",
        "My sources say no [citation needed]", "Outlook not so good", "Very doubtful", "503, oh no thats not good!",
        "Huh?", "What?", "Can you speak up?", "Segmentation fault (core dumped)", "Han shot first",
        "Have you tried water-scrum-fall?", "Have you tried turning it off and turning it on again?",
        "Survey says: no",
    ];
    let result = Math.floor(Math.random()*responses.length);
    return responses[result];
}

function tfLogo() {
    return `
                #####                   
           ##########    #####          
        ((((((((((((    ((((((###       
      ((((((((((((((    (((((((((((     
    ((((((((((((((((    ((((((((((///   
   ((((((((((((((       (((((((((/////  
                          ((((/*******  
   ((((,                           ***  
   //////******                         
   ***************      ***********,,,  
    *************.   ***,,,,,,,,,,,,,   
      *******,,,,    ,,,,,,,,,,,,,,     
        ,,,,,,,,,    ,,,,,,,,,,,,       
           ,,,,,    ,,,,,,,,,.          
                    .... `.replace(/ /g, "\xa0");
}

function hal(msg) {
    return `
 _______________
|===============|
|: .---------. :|
|: | HAL-9000| :|
|: '---------' :|    
|:             :| -- <${msg.replace("\n", "")}>
|:             :|    
|:             :|
|:     __      :|
|:  ,\`    \`.   :|
|: :   (o)  :  :|
|:  \`. __ ,\`   :|
|:             :|
|:_____________:|
|:=============:|
|:*%*%*%*%*%*%*:|
|:%*%*%*%*%*%*%:|
|:*%*%*%*%*%*%*:|
|:%*%*%*%*%*%*%:|
'==============='`.replace(/ /g, "\xa0");
}

class Help {

    static echo = "echo [*msg] - echoes each of the arguments on a new line";
    static clear = "cls | clear - clears the output of the terminal";
    static pwd = "pwd - prints the working directory to the console";
    static cd = "cd [path] - changes the current working directory to the given path";
    static ls = "ls [path] - gives information on the file or folder that matches the given path";
    static mkdir = "mkdir [path] - Creates a directory at the given path";
    static touch = "touch [fileName] - creates a file with the name given in the argument";
    static cp = "cp [oldPath] [newPath] - copies an existing file or directory to the new path";
    static mv = "mv [oldPath] [newPath] - moves an existing file or directory to the new path";
    static rm = "rm [-r|-rf] [path] - removes the file or directory with the given path";
    static cat = "cat [filePath] - prints our the contents of the given file";
    static open = "open [fileName] - opens the file with the given name.  Only files with the execute permission can be opened";
    static color = "color [color] - sets the terminal text color to the given color in the form #rrggbb or #rgb";
    static exit = "exit - clears the terminal and closes it";
    static restart = "restart - Reloads the page";
    static reset = "reset | nuke - Resets all persistent page data";
    static halsay = "halsay [msg] - Generates an ASCII image of Hal-9000 with the option of a custom message";
    static eightball = `eightball [query] - ${eightBall()}`;
    static secretSentinel = null;
    static ng = "ng - Never Gonna...";
    static mann = "mann - Brought to you by TF Industries";
    static dir = "dir - Why?";
    static mir = "mir - ??";
    static launch = "launch [warhead_id] [lat] [long] - ██████████████";
    static sudo = "sudo [command] - Elevates the user to root for a command";
    static doas = "doas [command] - Elevates the user to root for a command";
    static haltingproblem = "haltingproblem - Computes and prints out the optimal solution to the halting problem";
    static neofetch = "neofetch - displays system and software information";
    static whoami = "whoami - displays the current user";
    static void = "void - ██████████████";
    static admin = "admin - Administrator use only";

    static aggregateHelp() {
        let aggStr = "";
        for(let key of Object.keys(Help)){
            if(["aggregateHelp", "help", "aggregateSecretHelp"].includes(key)) continue;
            if(key === "secretSentinel") break;
            aggStr += Help[key]+"\n";
        }
        return aggStr;
    }
    static aggregateSecretHelp() {
        let aggStr = "";
        for(let key of Object.keys(Help)){
            if(["aggregateHelp", "help", "aggregateSecretHelp", "secretSentinel"].includes(key)) continue;
            aggStr += Help[key]+"\n";
        }
        return aggStr;
    }
    static help = `--< Help Menu >--
${SysEnv.SHELL} (${SysEnv.ARCH})
These shell commands are defined internally.  Type 'help' to see this list.

help [options] - print this message
${this.aggregateHelp()}`;

    static secretHelp = `--Secret Help--
MAthesis SHell (mash) extended capabilities.
Sensitive documents are exposed to these commands.  Use with caution.

${this.aggregateSecretHelp()}`;

}


function tokenizeCommand(command){
    let tokens = [];
    let activeToken = "";
    let quoteType = null;
    for(let i=0; i<command.length; i++){
        // Check to see if a quoted string has begun
        if(quoteType === null){
            if(`"'`.includes(command[i]))
                quoteType = command[i];

            if(`"' `.includes(command[i])){
                if(activeToken !== "") tokens.push(activeToken);
                activeToken = "";
                continue;
            }
        }
        // Complete string and push token when string terminates
        else if(command[i] === quoteType){
            if(activeToken !== "") tokens.push(activeToken);
            activeToken = "";
            quoteType = null;
            continue;
        }
        // If string is active, add to the string
        if(command[i] !== quoteType)
            activeToken += command[i];
    }
    // Add new token to list
    if(activeToken !== "") tokens.push(activeToken);
    console.log("Tokens:", tokens);

    return tokens;
}

function resolveTokens(env, tokens) {
    for(let i=0; i<tokens.length; i++) {
        if(tokens[i][0] === "$") {
            let envVar = env[tokens[i].substring(1)];
            tokens[i] = envVar ? envVar : "";
        }
        if(i === 0 && tokens[i].includes("=")) {
            let assignTokens = tokens[i].split("=");
            if(!assignTokens[0]) throw new Error("Assignment requires a variable name before '='!");
            else if(assignTokens[0][0] === "$") throw new Error("Assignment requires naked variables (no '$')!");
            else if(!assignTokens[1]) delete env[assignTokens[0]];
            else env[assignTokens[0]] = assignTokens[1];

            tokens.splice(i, 1);
            i --;
            continue;
        }
    }
}

export { resolveTokens, resolvePath, tokenizeCommand, Help, eightBall, haltingProblem, neofetch, closeTerminal, tfLogo, hal, rmRoot };