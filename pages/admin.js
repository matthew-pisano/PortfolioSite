import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import {SysEnv} from "../scripts/utils";


let mathesisIcon = `${SysEnv.OS} ${SysEnv.ARCH}
        <span style="color: #05c905">
              lWMMMMMMMMMWl        lWMMMMMMMMMWl
            ,;kWMMMMMMMMMWk;,,  ,,;kWMMMMMMMMMWk;,
           WWWMMMMMMMMMMMMMWWW  WWWMMMMMMMMMMMMMWWW
           MMMMMMWKkkkKMMMMMMMMMMMMMMMMKkkkKWMMMMMM
           MMMMMMWl   lWMMMMMMMMMMMMMMWl   lWMMMMMM
           MMMMMMWl   ,xkkKMMMMMMMMKkkx,   lWMMMMMM
           MMMMMMWl       lWMMMMMMWl       lWMMMMMM
           MMMMMMWl       ,xkkkkkkx,       lWMMMMMM
           MMMMMMWl                        lWMMMMMM
           MMMMMMWl       .,,,,,,,,.       lWMMMMMM
           MMMMMMWl       lNWWWWWWNl       lWMMMMMM
           MMMMMMWl       lWM    MWl       lWMMMMMM
           MMMMMMWl       lWMMMMMMWl       lWMMMMMM
             kKMMWl       lWM    MWl       lWMMKk
              lWMWl       lWM    MWl       lWMWl
              lWMWl       lWM    MWl       lWMWl
     __  ___    _________ __   __ ______ _____ ______ ______ 
    /  \\/  /   / ___   __/ /  / /  ____/  ___/__   __/ ____/
    | \\  / |  /  \\  | |  | |__| | |__  | (___   | | | (___  
    | |\\/| | / /\\ \\ | |  |  __  |  __|  \\___ \\  | |  \\___ \\ 
    | |  | |/ ____ \\| |  | |  | | |____ ____) |_| |_ ____) |
    /_/  /___/    \\___/  /_/  /_/______/_____/______/_____/
    </span>
Entering admin landing shell...
Last login: ███ ███ ██ 19:00:03 ████ from ███.███.██.█`.replace(/\n/g, "<br>").replace(/\s\s/g, "&nbsp;&nbsp;");


let scpIcon = `<span>
.------------------------------------------------------------------------------------------.
|                                                         ,#############,                  |
|  ____                                                   ##           ##                  |
| / ___|  ___  ___ _   _ _ __ ___                     m####             ####m              |
| \\___ \\ / _ \\/ __| | | | '__/ _ \\                 m##*'        mmm        '*##m           |
|  ___) |  __/ (__| |_| | | |  __/_              ###'         mm###mm         '###         |
| |____/ \\___|\\___|\\__,_|_|  \\___(_)           ###        m#############m        ###       |
|                                             ##       m####*'  ###  '*####        ##      |
|                                            ##      m####      ###      ####m      ##     |
|   ____            _        _              ##      ####      #######      ####      ##    |
|  / ___|___  _ __ | |_ __ _(_)_ __        m#      ###'        #####        '###      #m   |
| | |   / _ \\| '_ \\| __/ _\` | | '_ \\       ##     ####           #           ####     ##   |
| | |__| (_) | | | | || (_| | | | | |_     ##     ###    wwwwwwww wwwwwwww    ###     ##   |
|  \\____\\___/|_| |_|\\__\\__,_|_|_| |_(_)    ##     ###m    ######   ######    m###     ##   |
|                                        ,###     '### m#######     #######m ###'     ###, |
|                                        ##'      m######'   *       *   '######m      '## |
|  ____            _            _         ##     *#*'######             ######'*#*     ##  |
| |  _ \\ _ __ ___ | |_ ___  ___| |_        ##         '#######m     m#######'         ##   |
| | |_) | '__/ _ \\| __/ _ \\/ __| __|        *#m          '###############'          m#*    |
| |  __/| | | (_) | ||  __/ (__| |_ _         ##m ,m,        ''*****''        ,m, m##      |
| |_|   |_|  \\___/ \\__\\___|\\___|\\__(_)         *##'*###m                   m###*'##*       |
|                                                    '*#######m     m#######*'             |
|                                                           '*#######*'                    |
'------------------------------------------------------------------------------------------'</span>
<p>loading fallback archive [INTERNAL]...</p>`.replace(/\n/g, "<br>").replace(/ /g, '&nbsp;');


function Admin() {

    useEffect(() => {
        document.getElementById("adminPw").focus();
        document.documentElement.onclick = () => {
            document.getElementById("adminPw").focus();
        };
    }, []);

    async function accessGranted() {
        localStorage.setItem("adminAccess", "granted");

        let holder = document.getElementById("pwHolder");
        document.getElementById("adminPw").remove();
        document.getElementById("pwPrompt").remove();

        holder.innerHTML += `<p>Loading sensitive data.  Do not disclose...</p>
            <p>Granting temporary permission...</p>
            <p style="color: red">Re-authentication will be required shortly after this session.</p>`;

        await new Promise(r => setTimeout(r, 3000));

        for(let i=0; i < 37; i++){
            await new Promise(r => setTimeout(r, 100));
            holder.innerHTML += `<p style="color: red">Archive ${i}: [DATA EXPUNGED]</p>`;
            window.scrollTo(0, document.body.scrollHeight);
        }

        return holder;
    }

    async function renaissance() {
        let holder = await accessGranted();
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(r => setTimeout(r, 2000));

        window.location.replace("/secure/renaissance?auth="+(localStorage.getItem("adminAccess")+Math.floor(Date.now()/10000)).hashCode());
    }

    async function anomaly() {
        let holder = await accessGranted();
        holder.innerHTML += scpIcon;
        holder.innerHTML += `<p>loading archive [EXTERNAL]...</p>`;
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(r => setTimeout(r, 2000));

        window.location.replace("/secure/scp?auth="+(localStorage.getItem("adminAccess")+Math.floor(Date.now()/10000)).hashCode());
    }

    async function onInput(e) {

        if (e.nativeEvent.inputType === "insertParagraph" || e.nativeEvent.data === null && e.nativeEvent.inputType === "insertText"){
            let input = document.getElementById("adminPw");
            let holder = document.getElementById("pwHolder");

            if(input.innerText.substring(0, input.innerText.length-2) === "renaissance") return await renaissance();
            else if(input.innerText.substring(0, input.innerText.length-2) === "anomaly") return await anomaly();

            input.innerText = "incorrect";
            input.contentEditable = "false";
            holder.style.color = "red";
            await new Promise(r => setTimeout(r, 750));
            holder.style.color = "";
            input.innerText = "";
            input.contentEditable = "true";
            input.focus();
        }
    }

    return (
        <div className='lightText'>
            <p>{parse(mathesisIcon)}</p>
            <div id="pwHolder" style={{width: "100%", height: "30px"}}><span id="pwPrompt">password: </span>
                <span id="adminPw" spellCheck="false" contentEditable={true} onInput={onInput} style={{outline: "none", whiteSpace: "nowrap", color: "#1e1e1e"}}></span></div>
        </div>
    );
}


export default Admin;