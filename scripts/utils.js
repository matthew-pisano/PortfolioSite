let grayState = 30;
let grayDirection = 2;
let redBias = Math.log(grayState)+20;


async function babbler(){
    document.getElementsByClassName("titleCard")[0].children[0].children[0].innerText = randText(Math.floor(Math.random()*5)+10);

    let radii = ["10px", "20px", "50px", "75px"];
    let tileIndex = 0;
    while(document.getElementById("babbleTile"+tileIndex+"Title")) {
        document.getElementById("babbleTileHolder").style.borderRadius = radii[Math.floor(Math.random()*radii.length)];
        let titleElem = document.getElementById("babbleTile"+tileIndex+"Title");
        if(!titleElem.classList.contains("forceWrap")) titleElem.classList.add("forceWrap");
        let contentElem = document.getElementById("babbleTile"+tileIndex+"Content");
        if(!contentElem.classList.contains("forceWrap")) contentElem.classList.add("forceWrap");
        titleElem.innerHTML = randText(Math.floor(Math.random()*20)+10);
        contentElem.innerHTML = randText(Math.floor(Math.random()*300)+100);
        document.body.style.backgroundColor = "rgb("+(grayState+redBias)+", "+(grayState-redBias)+", "+(grayState-redBias)+")";
        console.log("Gray", grayState);
        grayState += grayDirection;
        redBias = Math.log(grayState)+20;
        if(grayState >= 200) grayDirection = -2;
        else if(grayState <= 30) grayDirection = 2;
        await new Promise(resolve => setTimeout(resolve, 500));
        tileIndex++;
    }
}

async function babbleLoop() {
    await new Promise(resolve => setTimeout(resolve, 200));
    console.log("Starting babble");
    // eslint-disable-next-line no-constant-condition
    while(true){
        babbler();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

function currentCustom(fileSystem){
    const urlParams = new URLSearchParams(window.location.search);
    let pagePath = urlParams.get("file") ? urlParams.get("file") : "";
    return {path: pagePath, result: fileSystem.getItem(pagePath)};
}

function randText(len){
    let randStr = "";
    while(randStr.length < len) randStr += Constants.alphabet[Math.floor(Math.random()*Constants.alphabet.length)];
    return randStr;
}

class Constants {

    static alpha(){
        let offset = 0;
        let tmp = Array.from(Array(26*2)).map((e, i) => {
            if(i+65 === 91) offset = 6;
            return i+65+offset;
        });
        let alpha = tmp.map((x) => String.fromCharCode(x));
        alpha.push(".", ".", ",", "e", "e", "e", "e", "a", "a", "a", 
        "t", "t", "t", "o", "o", "i", "i", "n", "h");
        return alpha;
    }
    static alphabet = this.alpha();
    static resumeUrl = "https://lightsail-image-repo.s3.amazonaws.com/documents/resume.pdf";
    
}

class SysEnv {

    static HOME_FOLDER = "/home/guest";
    static PUBLIC_FOLDER = "/home/guest/public";

    static SHELL = "GRU mash, version 5.1.16(1)-release";
    static ARCH = "x86_64-cloud-manix-gru";
    static OS = "primOS 10.02.1";
    static KERNEL = "7.05.01-server";
}

class Permissions {

    static READ = "r";
    static WRITE = "w";
    static EXECUTE = "x";
    static DENY = "---";
    static ALLOW = this.READ + this.WRITE + this.EXECUTE;

    static validate(permString) {
        if(permString.length !== 3) throw Error("Expected a permission string of length 3!");
        if(![this.READ, "-"].includes(permString[0])) throw Error(`Expected '${this.READ}' or '-' at permissions[0]!`);
        if(![this.WRITE, "-"].includes(permString[1])) throw Error(`Expected '${this.WRITE}' or '-' at permissions[1]!`);
        if(![this.EXECUTE, "-"].includes(permString[2])) throw Error(`Expected '${this.EXECUTE}' or '-' at permissions[2]!`);
    }
}

String.prototype.hashCode = function() {
  let hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

if(typeof window !== 'undefined'){
    let $ = require("jquery");
    $.fn.visible = function() {return this.css('visibility', 'visible');};
    $.fn.invisible = function() {return this.css('visibility', 'hidden');};
}


export { Constants, Permissions, SysEnv, babbleLoop, currentCustom };