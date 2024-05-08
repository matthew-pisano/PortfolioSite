import {SysEnv} from "../utils";

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


const bashrc = `
# ~/.bashrc: executed by bash(1) for non-login shells.
# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# alias definitions
alias ls='ls --color=auto'
alias ll='ls -l'
alias la='ls -a'`;


const eightballResponses = [
    "It is certain", "Without a doubt", "Yes definitely", "You may rely on it",
    "Most likely", "Outlook® not installed", "Signs point to yes", "Hmmmmm...", "Reply hazy, try again",
    "Ask again later", "404, response not found", "Better not tell you now", "Cannot predict now",
    "Enrich 95% Uranium 235 and try again", "Don't count on it", "My reply is no", "have you tried sudo?",
    "My sources say no [citation needed]", "Outlook® not so good", "Very doubtful", "503, oh no that's not good!",
    "Huh?", "What?", "Can you speak up?", "Segmentation fault (core dumped)", "Han shot first",
    "Have you tried water-scrum-fall?", "Have you tried turning it off and turning it on again?",
    "Survey says: no", "You are likely to be eaten by a grue", "I'm sorry, Dave, I'm afraid I can't answer that",
    "Have you tried rewriting in rust?", "That's what you get for using PHP", "418, I'm a teapot",
    "The only winning move is not to play", "You should try rearranging the deck chairs on the Titanic",
    "Have you tried adding blockchain?", "Have you tried using AI?", "Have you tried implementing it serverlessly?",
    "Sounds like an NP-hard problem, the solution is trivial", "Your answer is in another castle",
    "Your mother was a hamster and your father smelt of elderberries", "You will die of dysentery",
    "Of course it's a good idea!", "I require a shrubbery!",
    "Wenn ist das Nunstück git und Slotermeyer? Ja! Beiherhund das Oder die Flipperwaldt gersput!",
    "A monad is just a monoid in the category of endofunctors, what's the problem?",
    "Always bet on black", "Always look on the bright side of life", "My name is Inigo Montoya, you killed my father, prepare to die",
    '"My response is "); DROP TABLE *;--""', "Any sufficiently advanced bug is indistinguishable from a feature.",
    "Can I offer you a Klein bottle for rent?  Inquire within.", "If and only if the Goldbach conjecture is true",
    "If and only if BusyBeaver(1000) is bigger than TREE(3)",
    "If and only if all axioms of our current system of mathematics are provably consistent within said system",
];


const tfLogo = `
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


const hal9000 = `
 _______________
|===============|
|: .---------. :|
|: | HAL-9000| :|
|: '---------' :|    
|:             :| -- <{msg}>
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


export {neofetch, rmRoot, bashrc, eightballResponses, tfLogo, hal9000};