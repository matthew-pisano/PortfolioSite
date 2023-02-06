class Constants{
    static babbleTiles = null;
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
    
}
function randText(len){
    let randStr = "";
    while(randStr.length < len) randStr += Constants.alphabet[Math.floor(Math.random()*Constants.alphabet.length)];
    return randStr;
}
let grayState = 30;
let grayDirection = 2;
let redBias = Math.log(grayState)+20;
async function babbler(){
    if(!Constants.babbleTiles) return;
    let radii = ["10px", "20px", "50px", "75px"];
    for(let i=0; i<Constants.babbleTiles.length; i++){
        document.getElementById("babbleTileHolder").style.borderRadius = radii[Math.floor(Math.random()*radii.length)];
        let titleElem = document.getElementById("babbleTile"+i+"Title");
        if(!titleElem.classList.contains("forceWrap")) titleElem.classList.add("forceWrap");
        let contentElem = document.getElementById("babbleTile"+i+"Content");
        if(!contentElem.classList.contains("forceWrap")) contentElem.classList.add("forceWrap");
        titleElem.innerHTML = randText(Math.floor(Math.random()*20)+10);
        contentElem.innerHTML = randText(Math.floor(Math.random()*300)+100);
        document.getElementById("wrapperContent").style.backgroundColor = "rgb("+(grayState+redBias)+", "+(grayState-redBias)+", "+(grayState-redBias)+")";
        grayState += grayDirection;
        redBias = Math.log(grayState)+20;
        if(grayState >= 200) grayDirection = -2;
        else if(grayState <= 30) grayDirection = 2;
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

async function babbleLoop() {
    await new Promise(resolve => setTimeout(resolve, 200));
    console.log("Starting babble");
    while(window.location.pathname === "/babble"){
        babbler();
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    document.getElementById("wrapperContent").style.backgroundColor = "";
    console.log("Ending babble");
}

export {Constants, babbleLoop};