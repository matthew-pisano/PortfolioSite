# Portfolio Website of Matthew Pisano

This project serves as a showcase of the accomplishments and projects that
I have completed during my time as a student an a developer.

## Features

This website is modeled after Visual Studio Code, the editor that I
write many of my projects in.  This site features many of the navigation and
editing characteristics of VS Code.

### Explorer

The explorer sidebar, located on the left hand side allows for the
navigation of the pages within this site.  Clicking on each of the files
displays the page associated with that file.  For example, selecting `home.html`,
the homepage of the website.  The names of the files as symbolic, as they are all
built by *React.js* and JavaScript XML (JSX).  Additionally, when a file or folder
is selected, some additional information will be displayed on the blue command bar
at the bottom of the page, such as the file size or the number of files in a folder.
At the top of the explorer is the collapse button, which collapses th explorer to the
left if more room for viewing the website content is needed.

### Files

Each of the files in the explorer represent pages that explain the various projects,
research papers, or events that I have worked on or participated in.  The top of the 
page contains the title of the project and a brief description.  Below that are a 
series of tags.  The first tag is a link to the github repository of the project,
it leads to the source repository of the project for any who are interested.  For
research projects, a link to the paper is included right after.  The following tags
give information on the type of project, the language(s) used or the skills involved.
Below those are tiles that give more detailed information on the project, possibly
including their own tags or images.  Files can also be created by the user using 
standard HTML, JS, and CSS.

### File Editor

All files within the `custom/` folder are editable and can be renamed or deleted.
Selecting `File > New` on the menu bar will create a new file.  The most recently
selected file can be renamed using the `Edit > Rename` button on the menu bar.

These files will initially appear blank, all except for the `readme.html` file,
which offers further explanation on how to use the editor.  To add or edit the
content of these files, click the pencil icon to the right of the file.  This will
open the editor, whatever valid HTML, inline JS, or CSS that is typed here will
be interpreted and shown on screen whenever you select the main file itself once again.
This editor yields almost all of the standard features of HTML.  In fact, large portions
of this website can be recreated by using the editor alone!

### Terminal

For browsers with larger screen sizes, a terminal emulator is available at the bottom of
the screen.  This serves as a tool similar to the menu bar.  Files can be created, renamed
or deleted from here, along with other standard commands.  Further information can
be gathered by the `help` command.

## Hosting and SaaS

The current domain of the site can be found here, at
[http://matthewpisano.com/](http://matthewpisano.com/).

The domain name provides is Google Domains and the actual server is hosted on
an AWS Lightsail instance.  The repository I use for assets such as the images or
documents is AWS S3.