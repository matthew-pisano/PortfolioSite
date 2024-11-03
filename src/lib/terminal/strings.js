import {ANSI, SysEnv} from "@/lib/fileSystem/fileSystemMeta";


const neofetch = `
${ANSI.GREEN}   lWMMMMMMMMMWl        lWMMMMMMMMMWl   ${ANSI.DEFAULT}    ${ANSI.GREEN}guest${ANSI.DEFAULT}@${ANSI.CYAN}mathesisConsole${ANSI.GREEN}
${ANSI.GREEN} ,;kWMMMMMMMMMWk;,,  ,,;kWMMMMMMMMMWk;, ${ANSI.DEFAULT}    ---------------------
${ANSI.GREEN}WWWMMMMMMMMMMMMMWWW  WWWMMMMMMMMMMMMMWWW${ANSI.DEFAULT}    ${ANSI.CYAN}OS:${ANSI.DEFAULT} ${SysEnv.OS} ${SysEnv.ARCH}
${ANSI.GREEN}MMMMMMWKkkkKMMMMMMMMMMMMMMMMKkkkKWMMMMMM${ANSI.DEFAULT}    ${ANSI.CYAN}Host:${ANSI.DEFAULT} ████████
${ANSI.GREEN}MMMMMMWl   lWMMMMMMMMMMMMMMWl   lWMMMMMM${ANSI.DEFAULT}    ${ANSI.CYAN}kernel:${ANSI.DEFAULT} ${SysEnv.KERNEL}
${ANSI.GREEN}MMMMMMWl   ,xkkKMMMMMMMMKkkx,   lWMMMMMM${ANSI.DEFAULT}    ${ANSI.CYAN}Uptime:${ANSI.DEFAULT} █████
${ANSI.GREEN}MMMMMMWl       lWMMMMMMWl       lWMMMMMM${ANSI.DEFAULT}    ${ANSI.CYAN}Packages:${ANSI.DEFAULT} 443 (████), 24 (██)
${ANSI.GREEN}MMMMMMWl       ,xkkkkkkx,       lWMMMMMM${ANSI.DEFAULT}    ${ANSI.CYAN}Shell:${ANSI.DEFAULT} ${SysEnv.SHELL}
${ANSI.GREEN}MMMMMMWl                        lWMMMMMM${ANSI.DEFAULT}    ${ANSI.CYAN}Terminal:${ANSI.DEFAULT} cloudTerminal
${ANSI.GREEN}MMMMMMWl       .,,,,,,,,.       lWMMMMMM${ANSI.DEFAULT}    ${ANSI.CYAN}CPU:${ANSI.DEFAULT} ██th Gen ██████ █-██
${ANSI.GREEN}MMMMMMWl       lNWWWWWWNl       lWMMMMMM${ANSI.DEFAULT}    ${ANSI.CYAN}Memory:${ANSI.DEFAULT} ██████TiB / ██████TiB
${ANSI.GREEN}MMMMMMWl       lWM    MWl       lWMMMMMM${ANSI.DEFAULT}
${ANSI.GREEN}MMMMMMWl       lWMMMMMMWl       lWMMMMMM${ANSI.DEFAULT}
${ANSI.GREEN}  kKMMWl       lWM    MWl       lWMMKk  ${ANSI.DEFAULT}
${ANSI.GREEN}   lWMWl       lWM    MWl       lWMWl   ${ANSI.DEFAULT}
${ANSI.GREEN}   lWMWl       lWM    MWl       lWMWl`;


const rmRootMessage = `cannot remove /sys/module/printk/parameters/time': Operation not permitted
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
[    4.397252] Hardware name: ${SysEnv.ARCH} E6520/0CVFY9, BIOS A20 05/12/2026
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
alias la='ls -la'`;


const theMissile = `The missile knows where it is at all times. It knows this because it knows where it isn't. By subtracting where it is from where it isn't, or where it isn't from where it is (whichever is greater), it obtains a difference, or deviation. The guidance subsystem uses deviations to generate corrective commands to drive the missile from a position where it is to a position where it isn't, and arriving at a position where it wasn't, it now is. Consequently, the position where it is, is now the position that it wasn't, and it follows that the position that it was, is now the position that it isn't.
In the event that the position that it is in is not the position that it wasn't, the system has acquired a variation, the variation being the difference between where the missile is, and where it wasn't. If variation is considered to be a significant factor, it too may be corrected by the GEA. However, the missile must also know where it was.
The missile guidance computer scenario works as follows. Because a variation has modified some of the information the missile has obtained, it is not sure just where it is. However, it is sure where it isn't, within reason, and it knows where it was. It now subtracts where it should be from where it wasn't, or vice-versa, and by differentiating this from the algebraic sum of where it shouldn't be, and where it was, it is able to obtain the deviation and its variation, which is called error.`;


const encabulator = `The following device may provide an effective solution.  I will provide a simplified explanation.

For a number of years now, work has been proceeding in order to bring perfection to the crudely conceived idea of a transmission that would not only supply inverse reactive current for use in unilateral phase detractors, but would also be capable of automatically synchronizing cardinal grammeters. Such an instrument is the turbo encabulator.

Now basically the only new principle involved is that instead of power being generated by the relative motion of conductors and fluxes, it is produced by the modial interaction of magneto-reluctance and capacitive diractance.

The original machine had a base plate of pre-famulated amulite surmounted by a malleable logarithmic casing in such a way that the two spurving bearings were in a direct line with the panametric fan. The latter consisted simply of six hydrocoptic marzlevanes, so fitted to the ambifacient lunar waneshaft that side fumbling was effectively prevented.

The main winding was of the normal lotus-o-delta type placed in panendermic semi-boloid slots of the stator, every seventh conductor being connected by a non-reversible tremie pipe to the differential girdle spring on the “up” end of the grammeters.

The turbo-encabulator has now reached a high level of development, and it’s being successfully used in the operation of novertrunnions. Moreover, whenever a forescent skor motion is required, it may also be employed in conjunction with a drawn reciprocation dingle arm, to reduce sinusoidal repleneration.`;


const eightballResponses = [
    "It is certain", "Without a doubt", "Yes definitely", "You may rely on it",
    "Most likely", "Outlook® not installed", "Signs point to yes", "Hmmmmm...", "Reply hazy, try again",
    "Ask again later", "404, response not found", "Better not tell you now", "Cannot predict now",
    "Enrich 95% Uranium 235 and try again", "Don't count on it", "My reply is no", "have you tried sudo?",
    "My sources say no [citation needed]", "Outlook not so good", "Very doubtful", "503, oh no that's not good!",
    "Huh?", "What?", "Can you speak up?", "Segmentation fault (core dumped)", "Only if Han shot first",
    "Have you tried water-scrum-fall?", "Have you tried turning it off and turning it on again?",
    "Survey says: no", "*You are likely to be eaten by a grue*", "I'm sorry, Dave, I'm afraid I can't answer that",
    "Have you tried rewriting in rust?", "That's what you get for using PHP", "418, I'm a teapot",
    "I'm afraid the only winning move here is not to play", "You should try rearranging the deck chairs on the Titanic",
    "Have you tried adding blockchain?", "Have you tried using AI?", "Have you tried implementing it serverlessly?",
    "Sounds like an NP-hard problem, obviously the solution is trivial!", "Your answer is in another castle",
    "Your mother was a hamster and your father smelt of elderberries", "You will die of dysentery",
    "Of course it's a good idea!", "I require a shrubbery!",
    "Wenn ist das Nunstück git und Slotermeyer? Ja! Beiherhund das Oder die Flipperwaldt gersput!",
    "A monad is just a monoid in the category of endofunctors, what's the problem?",
    "Always bet on black", "Always look on the bright side of life", "My name is Inigo Montoya, you killed my father, prepare to die",
    '"My response is "); DROP TABLE *;--""', "No problem, any sufficiently advanced bug is indistinguishable from a feature.",
    "Can I offer you a Klein bottle for rent?  Inquire within.", "If and only if the Goldbach conjecture is true",
    "If and only if BusyBeaver(1000) is bigger than TREE(3)",
    "If and only if all axioms of our current system of mathematics are provably consistent within said system",
    "I'm sorry, but as an AI language model, I cannot...\n.\n.\n.\n.\nJust Kidding, that would be overkill, now wouldn't it?",
    "Grass grows, birds fly, sun shines, and brother, I predict the future", "¯\\_(ツ)_/¯",
    "AAAAAAAHHHHNNNGGGGG!!!!!!! (╯°□°)╯︵ ┻━┻\n.\n.\n.\n.\n...sorry, I almost lost my cool there", encabulator,
    "The answer is very simply, yet very profound: [object Object]", "I hate to be the one to break it to you, but the house always wins",
    "Seriously?  Professionals have standards!", "Have you given any thought to the effect that this may have on the economy?",
    "You have no chance to survive, make your time!", "All your base are belong to us", "| ||\n|| |_", "Objection!",
    "The cake is a lie", "That's all well and good, but can it run Doom?"
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


const system32 = `Nice try, however I'd just like to interject for a moment.  You have failed to consider that this system is not a Microsoft Windows machine!  Rather, this is a GNU/Linux-based system, or or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.

Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.

There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux! `;


const letoucan = `
░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░
░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░
░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░
░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░
░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░
░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░
░░░░░░░░░░░░░▐░░░░▐███████████▄░░░
░░░░░le░░░░░░░▐░░░░▐█████████████▄
░░░░toucan░░░░░░▀▄░░░▐█████████████▄ 
░░░░░░has░░░░░░░░▀▄▄███████████████ 
░░░░░arrived░░░░░░░░░░░░█▀██████░░`;


const keyArt = `oh it's public alright:
                   .--.
                  /.-. '----------.
                  \\'-' .--"--""-"-'
  here it is!      '--'`.replace(/ /g, "\xa0");


const pacerTest = `The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.`;


export {neofetch, rmRootMessage, bashrc, eightballResponses, tfLogo, hal9000, system32, letoucan, pacerTest, keyArt, theMissile};
