import {showDialog} from "../utils";
import {SysEnv} from "../fileSystem/fileSystemMeta";
import {masterFileSystem} from "../fileSystem/buildfs";

export class EventHandlers {

    /**
     * Whether the terminal is being dragged.  Needs to be global to be accessed by the event listeners
     * @type {boolean}
     */
    static isDragging = false;

    /**
     * The number of file drag enter events
     * @type {number}
     */
    static enterEvents = 0;
    /**
     * The number of file drag leave events
     * @type {number}
     */
    static leaveEvents = 0;

    /**
     * The index of the command in the history
     * @type {number}
     */
    static commandIndex = -1;


    /**
     * The previous commands in the terminal history
     * @type {[string]}
     */
    static prevCommands = [""];

    /**
     * The draft command in the terminal
     * @type {string}
     */
    static draftCommand = "";


    /**
     * The height of the terminal
     * @type {number}
     */
    static terminalHeight = 0;

    static initProperties() {
        // Load the terminal history
        let history = localStorage.getItem("terminalHistory");
        if (history) this.prevCommands = JSON.parse(history);
    }

    static addEventListeners(resizeTerminal) {
        // Listeners need to be global to avoid losing track of the thumb
        document.addEventListener("mousemove", (evt) => this.thumbDrag(evt, resizeTerminal));
        document.addEventListener("mouseup", this.thumbDragEnd);
        document.body.addEventListener('drop', (evt) => evt.preventDefault(), false);
        document.body.addEventListener('dragover', (evt) => evt.preventDefault(), false);
        // Capture ALT + SHIFT + `
        document.addEventListener('keydown', e => {
            if (e.shiftKey && e.altKey && e.key === '`' && !e.shiftKey) {
                // Prevent the Save dialog to open
                e.preventDefault();
                document.getElementById("terminalHeader").click();
            }
        });
    }

    /**
     * Handles the drag enter event for the terminal
     * @param e {DragEvent} The drag event
     */
    static onDragEnter(e) {
        EventHandlers.enterEvents += 1;
        e.preventDefault();

        if (!e.dataTransfer.items || e.dataTransfer.items.length === 0 || e.dataTransfer.items[0].kind !== "file") return;

        document.getElementById('terminalFileHandler').style.visibility = "visible";
    }

    /**
     * Handles the drag leave event for the terminal
     * @param e {DragEvent} The drag event
     */
    static onDragLeave(e) {
        EventHandlers.leaveEvents += 1;
        e.preventDefault();

        if (EventHandlers.leaveEvents < EventHandlers.enterEvents) return;

        document.getElementById('terminalFileHandler').style.visibility = "hidden";
    }

    /**
     * Handles the drop event for the terminal
     * @param e {DragEvent} The drag event
     */
    static onDrop(e) {
        EventHandlers.enterEvents = 0;
        EventHandlers.leaveEvents = 0;
        e.preventDefault();

        let files = e.dataTransfer.files;
        for (let file of files) {

            if (!file.type.startsWith("text")) {
                showDialog("Invalid File", `'${file.name}' is not a text file`);
                continue;
            }

            let reader = new FileReader();
            reader.onload = (e) => {
                try {
                    let text = e.target.result;

                    let mntPath = SysEnv.MOUNT_FOLDER + "/" + file.name;
                    masterFileSystem.writeText(mntPath, text);

                    showDialog("Copied File", `Copied to '${mntPath}'`);
                } catch (e) {
                    showDialog("Error", e.message);
                }
            };
            reader.readAsText(file);
        }

        document.getElementById('terminalFileHandler').style.visibility = "hidden";
    }

    /**
     * Initiates the terminal thumb drag
     */
    static thumbDragStart() {
        EventHandlers.isDragging = true;
    }

    /**
     * Handles the drag event for the terminal thumb
     * @param e {MouseEvent} The mouse move event
     * @param resizeTerminal {function} The function to resize the terminal
     */
    static thumbDrag(e, resizeTerminal) {
        if (!this.isDragging) return;
        let thumb = document.getElementById('terminalThumb');
        let newHeight = thumb.getBoundingClientRect().top - e.clientY + this.terminalHeight;
        resizeTerminal(newHeight);
    }

    /**
     * Terminates the terminal thumb drag
     */
    static thumbDragEnd() {
        EventHandlers.isDragging = false;
    }

    /**
     * Handles the key down event
     * @param e {object} The key down event
     * @param submit {function} The function to submit the command
     */
    static onKeyDown(e, submit) {
        let terminalInput = document.getElementById('terminalInput');
        // Scroll the terminal output to the bottom on input
        let terminalOutput = document.getElementById('terminalOutput');
        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        if (e.code === "Enter") {
            e.preventDefault();
            submit();
        }
        // Handle the arrow keys to navigate the command history
        else if (e.code === "ArrowUp") {
            // Save the draft command if it is not in the history
            if (this.commandIndex === -1 && terminalInput.innerText.length > 0)
                this.draftCommand = terminalInput.innerText.replace("\n", "").replace("\r", "");

            if (this.commandIndex < this.prevCommands.length - 1) this.commandIndex++;
            terminalInput.innerText = this.prevCommands[this.prevCommands.length - 1 - this.commandIndex];
        } else if (e.code === "ArrowDown") {
            if (this.commandIndex > -1) this.commandIndex--;
            terminalInput.innerText = this.commandIndex > -1 ? this.prevCommands[this.prevCommands.length - 1 - this.commandIndex] : this.draftCommand;
        }
    }

    /**
     * Clears the terminal history
     */
    static clearHistory() {
        this.prevCommands = [""];
        localStorage.setItem("terminalHistory", JSON.stringify(this.prevCommands));
    }

    /**
     * Adds the command to the terminal history
     * @param command {string} The command to add
     */
    static submitCommand(command) {
        // Add the command to the history
        if (this.prevCommands[0] === "" && command.length > 0)
            this.prevCommands = ([command, ...this.prevCommands.slice(1)]);
        else if (this.prevCommands[this.prevCommands.length - 1] !== command && command.length > 0)
            this.prevCommands = [...this.prevCommands, command];
        localStorage.setItem("terminalHistory", JSON.stringify(this.prevCommands));
        this.draftCommand = "";
        this.commandIndex = -1;
    }
}
