import React, { Component } from 'react';
import { buildPage } from '../scripts/pageBuilder';
import PropTypes from 'prop-types';
import {Wrapper} from '../scripts/wrapper';

class Help extends Component {

    static propTypes = {display: PropTypes.string};
    render() {
        let tiles = [
            {
                title: "#Overview",
                content: `This website is modeled after Visual Studio Code, the editor that I write many of my projects in. 
                    This site features many of the navigation and editing characteristics of VS Code.`
            },
            {
                title: "Source",
                content: `As with the vast majority of my projects, this website is fully open-source!  All system pages,
                    terminal emulation code, and build scripts can be found in a GitHub repository.`,
                gitLink: "https://github.com/matthew-pisano/PortfolioSite",
                gitTitle: "Source Code",
            },
            {
                title: "#Features",
                content: ``,
                style: {backgroundColor: "#41414155"}
            },
            {
                title: "Explorer",
                content: `The explorer sidebar, located on the left-hand side, allows for the
                    navigation of the pages within this site.  Clicking on each of the files
                    displays the page associated with that file.  For example, selecting <b>home.html</b>
                    opens the homepage of the website.  The names of the files are symbolic, as they are all
                    built by <i>React.js</i> and JavaScript XML (JSX).  Additionally, when a file or folder
                    is selected, some additional information will be displayed on the blue command bar
                    at the bottom of the page, such as the file size or the number of files in a folder.
                    At the top of the explorer is the collapse button, which collapses the explorer to the
                    left if more room for viewing the website content is needed.`
            },
            {
                title: "Files",
                content: `Each of the files in the explorer represent pages that explain the various projects,
                    research papers, or events that I have worked on or participated in.  The top of the 
                    page contains the title of the project and a brief description.  Below that are a 
                    series of tags.  The first tag is a link to the github repository of the project,
                    it leads to the source repository of the project for any who are interested.  For
                    research projects, a link to the paper is included right after.  The tags that follow those
                    give more information on the type of project, the language(s) used, or the skills involved.
                    Below those are tiles that give more detailed information on the project, possibly
                    including their own tags or images.  Files can also be created by the user using 
                    standard HTML, and CSS.`
            },
            {
                title: "File Editor",
                content: `All user-created files are editable and can be renamed or deleted.  These are usually
                    located within the <b>custom/</b> folder if created using the GUI.
                    Selecting <b>File > New</b> on the menu bar will create a new file.  Files can be
                    renamed by right-clicking on them and selecting the <b>Rename</b> button in the context menu.
        
                    These files will initially appear blank, all except for the <b>custom/readme.html</b> file,
                    which offers further explanation on how to use the editor.  To add or edit the
                    content of these files, click the pencil icon to the right of the file.  This will
                    open the editor; whatever valid HTML or CSS that is typed here will
                    be interpreted and shown on screen whenever you select the main file itself once again.
                    This editor yields almost all of the standard features of HTML.  In fact, large portions
                    of this website can be recreated by using the editor alone!`
            },
            {
                title: "Terminal",
                content: `For browsers with larger screen sizes, a terminal emulator is available at the bottom of
                    the screen.  This serves as a tool similar to the menu bar.  Files can be created, renamed
                    or deleted from here, along with other standard commands.  Further information can
                    be gathered by the <b>help</b> command in the terminal.`
            },
        ];
        let pageInfo = {
            pageName: "help",
            holderStyle: {backgroundColor: "#919ba8", borderRadius: "10px"},
            tags: ["help"]
        };
        return (<Wrapper pageName={pageInfo.pageName}>
            <div id={pageInfo.pageName+"Page"} className="page container w3-rest lightText">
                <div className="inner titleCard">
                    <h1 style={{margin: "auto", width: "auto", textAlign: "center"}}><b>Help Menu</b></h1><br/>
                    <h3 style={{margin: "auto", width: "auto", textAlign: "center"}}>In case you&apos;d like some assistance</h3>
                </div>
                {buildPage(pageInfo, tiles)}
            </div>
        </Wrapper>);
    }
}

export default Help;