class SSH {
    static authorizedKeys = "I would tell you, but then I would have to ^C you.";
    static idRsa = "It would be pretty silly if this was a real key, wouldn't it?";
    static idRsaPub = `oh it's public alright:
                       .--.
                      /.-. '----------.
                      \\'-' .--"--""-"-'
      here it is!      '--'`.replace(/ /g, "\xa0");
    static knownHosts = "I don't know any good hosts, do you?";
}

class DontPanic {
    static improbability = "Ford, you're turning into a penguin. Stop it.";
    static finalMessage = "We're sorry for the inconvenience";
    static tea = "Something almost, but not quite entirely unlike tea";
    static lunch = "Time is an illusion, lunchtime doubly so.";
    static earth = "Mostly harmless";
}

export { SSH, DontPanic };
