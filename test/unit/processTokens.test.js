import {describe, expect, test} from '@jest/globals';

import {insertVars, processAssignment, tokenizeCommand} from "../../scripts/terminal/processTokens";


describe('Test insertVars', () => {
    let testEnv = {
        "var": "1",
        "var2": "2",
        "variable": "3"
    };
    test('Test Valid Single Var', () => {
        expect(insertVars(testEnv, "$var")).toBe(testEnv["var"]);
        expect(insertVars(testEnv, " $var ")).toBe(` ${testEnv["var"]} `);
        expect(insertVars(testEnv, "+$var+")).toBe(`+${testEnv["var"]}+`);
        expect(insertVars(testEnv, "He was #$var!")).toBe(`He was #${testEnv["var"]}!`);
        expect(insertVars(testEnv, "$var=1")).toBe(`${testEnv["var"]}=1`);
    });
    test('Test Valid Multiple Vars', () => {
        expect(insertVars(testEnv, "Equ: $var2+$var = $variable")).toBe(`Equ: ${testEnv["var2"]}+${testEnv["var"]} = ${testEnv["variable"]}`);
        expect(insertVars(testEnv, "Disk:$var$variable")).toBe(`Disk:${testEnv["var"]}${testEnv["variable"]}`);
    });
    test('Test Invalid Vars', () => {
        expect(insertVars(testEnv, "$var3")).toBe("");
        expect(insertVars(testEnv, "$var3$var2")).toBe(testEnv["var2"]);
        expect(insertVars(testEnv, "$var3$$variabl")).toBe("$");
        expect(insertVars(testEnv, "$var3 $ $variabl")).toBe(" $ ");
    });
});


describe('Test processAssignment', () => {
    let testEnv = {"var": "1"};
    test('Test Valid Assignments', () => {
        expect(processAssignment(testEnv, "var=5", undefined))
            .toStrictEqual({newEnv: {"var": "5"}, remove: true, removeNext: false});
        expect(processAssignment(testEnv, "var2=5", undefined))
            .toStrictEqual({newEnv: {"var": "1", "var2": "5"}, remove: true, removeNext: false});
        expect(processAssignment(testEnv, "var2=5 + 4 = 9", undefined))
            .toStrictEqual({newEnv: {"var": "1", "var2": "5 + 4 = 9"}, remove: true, removeNext: false});

        expect(processAssignment(testEnv, "var2=", "5"))
            .toStrictEqual({newEnv: {"var": "1", "var2": "5"}, remove: true, removeNext: true});
        expect(processAssignment(testEnv, "var2=5", "ls"))
            .toStrictEqual({newEnv: {"var": "1", "var2": "5"}, remove: true, removeNext: false});
        expect(processAssignment(testEnv, "var2=", "5 + 4 = 9"))
            .toStrictEqual({newEnv: {"var": "1", "var2": "5 + 4 = 9"}, remove: true, removeNext: true});
    });

    test('Test Valid Unassignments', () => {
        expect(processAssignment(testEnv, "var=", undefined))
            .toStrictEqual({newEnv: {}, remove: true, removeNext: false});
        expect(processAssignment(testEnv, "var2=", undefined))
            .toStrictEqual({newEnv: {"var": "1"}, remove: true, removeNext: false});
    });

    test('Test Invalid Assignments', () => {
        expect(processAssignment(testEnv, "=", undefined))
            .toStrictEqual({newEnv: {"var": "1"}, remove: false, removeNext: false});
        expect(processAssignment(testEnv, "=4", undefined))
            .toStrictEqual({newEnv: {"var": "1"}, remove: false, removeNext: false});
        expect(processAssignment(testEnv, "=", "5"))
            .toStrictEqual({newEnv: {"var": "1"}, remove: false, removeNext: false});
    });
});


describe('Test tokenizeCommand', () => {
    test('Test Empty Command', () => {
        expect(tokenizeCommand("")).toStrictEqual([[]]);
    });
    test('Test Single Token', () => {
        expect(tokenizeCommand("ls")).toStrictEqual([["ls"]]);
        expect(tokenizeCommand("ls ")).toStrictEqual([["ls"]]);
        expect(tokenizeCommand(" ls")).toStrictEqual([["ls"]]);
        expect(tokenizeCommand(" ls ")).toStrictEqual([["ls"]]);
    });
    test('Test Multiple Tokens', () => {
        expect(tokenizeCommand("ls cd")).toStrictEqual([["ls", "cd"]]);
        expect(tokenizeCommand(" ls   cd ")).toStrictEqual([["ls", "cd"]]);
    });
    test('Test Quotes', () => {
        expect(tokenizeCommand("ls 'cd'")).toStrictEqual([["ls", "cd"]]);
        expect(tokenizeCommand("ls 'cd ef'")).toStrictEqual([["ls", "cd ef"]]);
        expect(tokenizeCommand("ls 'cd ef' gh")).toStrictEqual([["ls", "cd ef", "gh"]]);
        expect(tokenizeCommand('ls " cd ef" gh')).toStrictEqual([["ls", " cd ef", "gh"]]);
        expect(tokenizeCommand(`ls "cd ef" 'gh'`)).toStrictEqual([["ls", "cd ef", "gh"]]);
        expect(tokenizeCommand(`ls "cd 'ef" 'gh"'`)).toStrictEqual([["ls", "cd 'ef", 'gh"']]);
    });
    test('Test Semicolons', () => {
        expect(tokenizeCommand("ls;cd")).toStrictEqual([["ls"], ["cd"]]);
        expect(tokenizeCommand("   ls ; cd ")).toStrictEqual([["ls"], ["cd"]]);
        expect(tokenizeCommand("echo '; ls'")).toStrictEqual([["echo", "; ls"]]);
    });
});
