import { describe, test, expect } from "vitest";

import { insertVars, processAssignment, tokenizeCommand } from "@/lib/terminal/processTokens";

describe("Test insertVars", () => {
    let testEnv = {
        var: "1",
        var2: "2",
        variable: "3"
    };
    test("Test Valid Single Var", () => {
        expect(insertVars(testEnv, "$var")).toBe(testEnv["var"]);
        expect(insertVars(testEnv, " $var ")).toBe(` ${testEnv["var"]} `);
        expect(insertVars(testEnv, "+$var+")).toBe(`+${testEnv["var"]}+`);
        expect(insertVars(testEnv, "He was #$var!")).toBe(`He was #${testEnv["var"]}!`);
        expect(insertVars(testEnv, "$var=1")).toBe(`${testEnv["var"]}=1`);
    });
    test("Test Valid Multiple Vars", () => {
        expect(insertVars(testEnv, "Equ: $var2+$var = $variable")).toBe(
            `Equ: ${testEnv["var2"]}+${testEnv["var"]} = ${testEnv["variable"]}`
        );
        expect(insertVars(testEnv, "Disk:$var$variable")).toBe(`Disk:${testEnv["var"]}${testEnv["variable"]}`);
    });
    test("Test Invalid Vars", () => {
        expect(insertVars(testEnv, "$ ")).toBe("$ ");
        expect(insertVars(testEnv, "$var3")).toBe("");
        expect(insertVars(testEnv, "$var3$var2")).toBe(testEnv["var2"]);
        expect(insertVars(testEnv, "$var3$$variabl")).toBe("$");
        expect(insertVars(testEnv, "$var3 $ $variabl")).toBe(" $ ");
    });
});

describe("Test processAssignment", () => {
    let testEnv = { var: "1" };
    test("Test Valid Assignments", () => {
        expect(processAssignment(testEnv, "var=5")).toStrictEqual({ var: "5" });
        expect(processAssignment(testEnv, "var2=5")).toStrictEqual({ var: "1", var2: "5" });
        expect(processAssignment(testEnv, "var2=5 + 4 = 9")).toStrictEqual({ var: "1", var2: "5 + 4 = 9" });
    });

    test("Test Valid Unassignments", () => {
        expect(processAssignment(testEnv, "var=")).toStrictEqual({});
        expect(processAssignment(testEnv, "var2=")).toStrictEqual({ var: "1" });
    });

    test("Test Invalid Assignments", () => {
        expect(processAssignment(testEnv, "=")).toStrictEqual({ var: "1" });
        expect(processAssignment(testEnv, "=4")).toStrictEqual({ var: "1" });
    });
});

describe("Test tokenizeCommand", () => {
    test("Test Empty Command", () => {
        expect(tokenizeCommand("")).toStrictEqual([[]]);
    });
    test("Test Single Token", () => {
        expect(tokenizeCommand("ls")).toStrictEqual([["ls"]]);
        expect(tokenizeCommand("ls ")).toStrictEqual([["ls"]]);
        expect(tokenizeCommand(" ls")).toStrictEqual([["ls"]]);
        expect(tokenizeCommand(" ls ")).toStrictEqual([["ls"]]);
    });
    test("Test Multiple Tokens", () => {
        expect(tokenizeCommand("ls cd")).toStrictEqual([["ls", "cd"]]);
        expect(tokenizeCommand(" ls   cd ")).toStrictEqual([["ls", "cd"]]);
    });
    test("Test Quotes", () => {
        expect(tokenizeCommand("ls 'cd'")).toStrictEqual([["ls", "cd"]]);
        expect(tokenizeCommand("l's'")).toStrictEqual([["ls"]]);
        expect(tokenizeCommand("ls 'cd ef'")).toStrictEqual([["ls", "cd ef"]]);
        expect(tokenizeCommand("ls 'cd ef' gh")).toStrictEqual([["ls", "cd ef", "gh"]]);
        expect(tokenizeCommand('ls " cd ef" gh')).toStrictEqual([["ls", " cd ef", "gh"]]);
        expect(tokenizeCommand(`ls "cd ef" 'gh'`)).toStrictEqual([["ls", "cd ef", "gh"]]);
        expect(tokenizeCommand(`ls "cd 'ef" 'gh"'`)).toStrictEqual([["ls", "cd 'ef", 'gh"']]);
        expect(tokenizeCommand(`b="$a"`)).toStrictEqual([["b=$a"]]);
    });
    test("Test Semicolons", () => {
        expect(tokenizeCommand("ls;cd")).toStrictEqual([["ls"], ["cd"]]);
        expect(tokenizeCommand("   ls ; cd ")).toStrictEqual([["ls"], ["cd"]]);
        expect(tokenizeCommand("echo '; ls'")).toStrictEqual([["echo", "; ls"]]);
    });
    test("Test Comments", () => {
        expect(tokenizeCommand("ls #cd")).toStrictEqual([["ls"]]);
        expect(tokenizeCommand("ls; cd#echo\n")).toStrictEqual([["ls"], ["cd"]]);
        expect(tokenizeCommand("echo hello#there")).toStrictEqual([["echo", "hello"]]);
        expect(tokenizeCommand("echo 'hello#there'")).toStrictEqual([["echo", "hello#there"]]);
        expect(tokenizeCommand('echo "hello;#  there"')).toStrictEqual([["echo", "hello;#  there"]]);
    });
});
