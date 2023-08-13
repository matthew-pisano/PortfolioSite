import React, { Component } from 'react';

class Admin extends Component {

    render() {
        //&nbsp;
        let icon = `
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
       MMMMMMWl       lWM    MWl       lWMMMMMM
         kKMMWl       lWM    MWl       lWMMKk
          lWMWl       lWM    MWl       lWMWl
          lWMWl       lWM    MWl       lWMWl
                __  ___        _   _       _
        |\\ /|  | _|  |  |_ |  |_  |_   |  |_
        |   |  |  |  |  |  |  |_   _|  |   _|
        `.replace(/\n/g, "<br>").replace(/\s/g, "&nbsp;");
        return (
            <div className='lightText'>
                <p dangerouslySetInnerHTML={{ __html: icon }} />
                <p>Valid Credentials Not Detected</p>
                <p style={{color: "red"}}>Permission Denied</p>
                <p>Security incident log in <span style={{backgroundColor: "#2e2e2e", borderRadius: "7px", padding: "4px"}}>/documents</span></p>
            </div>
        );
    }
}

export default Admin;