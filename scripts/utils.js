

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
    static resumeUrl = "/assets/resume.pdf";

}

class SysEnv {

    static HOME_FOLDER = "/home/guest";
    static PUBLIC_FOLDER = "/home/guest/public";

    static SHELL = "GRU mash, version 5.1.16(1)-release";
    static ARCH = "x86_64-cloud-manix-gru";
    static OS = "primOS 10.02.1";
    static KERNEL = "7.05.01-server";
}

class Perms {

    static READ = "r";
    static WRITE = "w";
    static EXECUTE = "x";
    static DENY = "---";
    static ALLOW = this.READ + this.WRITE + this.EXECUTE;
    static READ_ONLY = this.READ + "-" + this.EXECUTE;

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


export { Constants, Perms, SysEnv };