import React, { Component, useEffect } from 'react';
import parse from 'html-react-parser';
import {SysEnv} from "../scripts/utils";

const Admin = () => {

    useEffect(() => {
        document.getElementById("adminPw").focus();
        document.documentElement.onclick = () => {
            document.getElementById("adminPw").focus();
        };
    }, []);


    async function renaissance() {

        localStorage.setItem("adminAccess", "granted");

        let holder = document.getElementById("pwHolder");
        document.getElementById("adminPw").remove();
        document.getElementById("pwPrompt").remove();

        holder.innerHTML += `<p>Loading sensitive data.  Do not disclose...</p>
            <p>Granting temporary permission...</p>
            <p style="color: red">Re-authentication will be required after this session.</p>`;
        await new Promise(r => setTimeout(r, 3000));

        for(let i=0; i < 37; i++){
            await new Promise(r => setTimeout(r, 100));
            holder.innerHTML += `<p style="color: red">Archive ${i}: [DATA EXPUNGED]</p>`;
            window.scrollTo(0, document.body.scrollHeight);
        }

        holder.innerHTML += `<p>loading fallback archive [INTERNAL]...</p>`;
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise(r => setTimeout(r, 2000));

        window.location.replace("/secure/renaissance?auth="+(localStorage.getItem("adminAccess")+Math.floor(Date.now()/10000)).hashCode());
    }
    async function onInput(e) {
        // console.log("Got input:", e.nativeEvent);
        if (e.nativeEvent.inputType === "insertParagraph" || e.nativeEvent.data === null && e.nativeEvent.inputType === "insertText"){
            let input = document.getElementById("adminPw");
            let holder = document.getElementById("pwHolder");

            if(input.innerText.substring(0, input.innerText.length-2) === "renaissance") return await renaissance();

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

    let icon = `${SysEnv.OS} ${SysEnv.ARCH}
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
     __  __       _______ _    _ ______  _____ _____  _____ 
    |  \\/  |   /\\|__   __| |  | |  ____|/ ____|_   _|/ ____|
    | \\  / |  /  \\  | |  | |__| | |__  | (___   | | | (___  
    | |\\/| | / /\\ \\ | |  |  __  |  __|  \\___ \\  | |  \\___ \\ 
    | |  | |/ ____ \\| |  | |  | | |____ ____) |_| |_ ____) |
    |_|  |_/_/    \\_\\_|  |_|  |_|______|_____/|_____|_____/
    </span>
entering admin landing shell...
Last login: ███ ███ ██ 19:00:03 ████ from ███.███.██.█`.replace(/\n/g, "<br>").replace(/\s\s/g, "&nbsp;&nbsp;");
    return (
        <div className='lightText'>
            <p>{parse(icon)}</p>
            <div id="pwHolder" style={{width: "100%", height: "30px"}}><span id="pwPrompt">password: </span>
                <span id="adminPw" contentEditable={true} onInput={onInput} style={{outline: "none", whiteSpace: "nowrap", color: "#1e1e1e"}}></span></div>
        </div>
    );
};

export default Admin;