import styles from "@/styles/Terminal.module.css";


/**
 * The current state of the terminal sprite
 */
class SpriteState {
    IDLE_FRAME = "/media/image/scrmlnIdle.png";
    FALL_FRAME = "/media/image/scrmlnFall.png";
    BLINK_FRAME = "/media/image/scrmlnBlink.png";

    constructor() {
        this.scrmlnElem = document.getElementById("terminalSprite");
        this.frame = 0;
    }

    /**
     * Sets the sprite to the falling state
     */
    fall() {
        if (this.frame === this.FALL_FRAME) return;  // Already falling
        this.frame = this.FALL_FRAME;
        this.scrmlnElem.src = this.frame;
    }

    /**
     * Sets the sprite to the idle state
     */
    idle() {
        if (Date.now() % 4000 < 200) {  // True every 4 seconds with a 200ms buffer
            if (this.frame === this.BLINK_FRAME) return;  // Already blinking
            this.frame = this.BLINK_FRAME;
            this.scrmlnElem.src = this.frame;
        } else {
            if (this.frame === this.IDLE_FRAME) return;  // Already idle
            this.frame = this.IDLE_FRAME;
            this.scrmlnElem.src = this.frame;
        }
    }
}


/**
 * Updates the state and position of the terminal sprite
 * @returns {Promise<void>}
 */
async function updateTerminalSprite() {
    let terminalThumb = document.getElementById('terminalThumb');
    let terminalSprite = document.getElementById('terminalSprite');
    let scrmlnHeight = terminalSprite.getBoundingClientRect().height;
    let scrmlnState = new SpriteState();

    while (true) {
        let targetTop = terminalThumb.getBoundingClientRect().top - scrmlnHeight;
        let scrmlnTop = terminalSprite.getBoundingClientRect().top;

        if (scrmlnTop >= targetTop) {  // Set the sprite to the target top if it's below
            scrmlnState.idle();
            terminalSprite.style.top = targetTop + "px";
        } else {  // Make the sprite fall if it's above
            scrmlnState.fall();
            terminalSprite.style.top = scrmlnTop + 4 + "px";
        }

        await new Promise(resolve => setTimeout(resolve, 10));
    }
}


/**
 * Adds the terminal sprite above the terminal
 */
async function addTerminalSprite() {
    let terminalSprite = document.createElement("img");
    terminalSprite.id = "terminalSprite";
    terminalSprite.className = styles.terminalSprite;
    terminalSprite.src = "/media/image/scrmlnIdle.png";
    document.getElementById("terminalHolder").appendChild(terminalSprite);
    updateTerminalSprite();
}


export {addTerminalSprite};
