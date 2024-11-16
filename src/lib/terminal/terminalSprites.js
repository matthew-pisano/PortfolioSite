import styles from "@/styles/Terminal.module.css";


class Sprite {

    static SCRMLN = new Sprite("scrmln", "/media/image/scrmlnIdle.png", "/media/image/scrmlnFall.png", "/media/image/scrmlnBlink.png");
    static SCRBLN = new Sprite("scrbln", "/media/image/scrblnIdle.png", "/media/image/scrblnFall.png", "/media/image/scrblnBlink.png");

    constructor(spriteId, idleFrame, fallFrame, blinkFrame) {
        this.id = spriteId;
        this.idleFrame = idleFrame;
        this.fallFrame = fallFrame;
        this.blinkFrame = blinkFrame;
        this.spriteElem = null;
        this.spriteHeight = null;
        this.frame = 0;
        this.blinkJitter = Math.floor(Math.random() * 1000);
    }

    /**
     * Mounts the sprite to the sprite container
     */
    mount() {
        let spriteElemId = "terminalSprite"+this.id;
        if (document.getElementById(spriteElemId)) throw new Error(`Sprite with ID '${spriteElemId}' already exists`);

        let terminalSprite = document.createElement("img");
        terminalSprite.id = spriteElemId;
        terminalSprite.className = styles.terminalSprite;
        document.getElementById("spriteContainer").appendChild(terminalSprite);
        this.spriteElem = terminalSprite;
        this.spriteHeight = terminalSprite.getBoundingClientRect().height;
    }

    /**
     * Updates the state and position of the terminal sprite
     * @returns {Promise<void>}
     */
    async animationLoop() {
        if (this.spriteElem === null) throw new Error("Sprite not mounted");
        let terminalThumb = document.getElementById('terminalThumb');

        while (true) {
            let targetTop = terminalThumb.getBoundingClientRect().top - this.spriteHeight;
            let scrmlnTop = this.spriteElem.getBoundingClientRect().top;

            if (scrmlnTop >= targetTop) this.#idle();  // Set the sprite to the target top if it's below
            else this.#fall();  // Make the sprite fall if it's above

            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    /**
     * Sets the sprite to the falling state
     */
    #fall() {
        this.spriteElem.style.top = this.spriteElem.getBoundingClientRect().top + 4 + "px";
        if (this.frame === this.fallFrame) return;  // Already falling
        this.frame = this.fallFrame;
        this.spriteElem.src = this.frame;
    }

    /**
     * Sets the sprite to the idle state
     */
    #idle() {
        let terminalThumb = document.getElementById('terminalThumb');
        this.spriteElem.style.top = (terminalThumb.getBoundingClientRect().top - this.spriteHeight) + "px";
        if (Date.now() % (4000 + this.blinkJitter) < 200) {  // True every 4 seconds with a 200ms buffer
            if (this.frame === this.blinkFrame) return;  // Already blinking
            this.frame = this.blinkFrame;
            this.spriteElem.src = this.frame;
        } else {
            if (this.frame === this.idleFrame) return;  // Already idle
            this.frame = this.idleFrame;
            this.spriteElem.src = this.frame;
        }
    }
}


export {Sprite};
