import {describe, expect, test} from '@jest/globals';

import {mergeClientDirectory} from "@/lib/fileSystem/fileSystem";
import {Directory, File} from "@/lib/fileSystem/fileSystemObjects";


/**
 * Creates a set of test directories
 * @returns {Directory[]} The server and client directories to be merged
 */
function getTestDirectories() {
    let pageFiles = [new File("testFile1", "testContent1"),
        new File("testFile2", "testContent2"),
        new File("testFile3", "testContent3"),
        new File("testFile4", "testContent4")];
    for (let file of pageFiles) file.markAsPage();

    return [
        new Directory("testDir1", [
            pageFiles[0],
            pageFiles[2],
            new Directory("testDir2", [
                pageFiles[1]
            ]),
            new Directory("testDir3", [
                pageFiles[3]
            ]),
        ]),
        new Directory("testDir1", [
            pageFiles[0],
            new File("testCustomFile1", "testCustomContent1"),
            new Directory("testDir2", [
                pageFiles[1],
                new File("testCustomFile2", "testCustomContent2")
            ]),
            new Directory("testCustomDir1", [
                new File("testCustomFile3", "testCustomContent3")
            ])
        ]),
    ];
}


describe('Test mergeClientDirectory', () => {
    let [serverDir, clientDir] = getTestDirectories();
    mergeClientDirectory(serverDir, clientDir);

    test('Test Updated Server Objects', () => {
        expect(serverDir.subTree.find(obj => obj.name === "testFile3")).toBeDefined();
        let newServerDir = serverDir.subTree.find(obj => obj.name === "testDir3");
        expect(newServerDir).toBeDefined();
        expect(newServerDir.subTree.find(obj => obj.name === "testFile4")).toBeDefined();
    });

    test('Test Unchanged Server Objects', () => {
        expect(serverDir.subTree.find(obj => obj.name === "testFile1")).toBeDefined();
        let oldServerDir = serverDir.subTree.find(obj => obj.name === "testDir2");
        expect(oldServerDir).toBeDefined();
        expect(oldServerDir.subTree.find(obj => obj.name === "testFile2")).toBeDefined();
    });

    test('Test New Client Objects', () => {
        expect(serverDir.subTree.find(obj => obj.name === "testCustomFile1")).toBeDefined();
        let oldServerDir = serverDir.subTree.find(obj => obj.name === "testDir2");
        expect(oldServerDir.subTree.find(obj => obj.name === "testCustomFile2")).toBeDefined();
        let newClientDir = serverDir.subTree.find(obj => obj.name === "testCustomDir1");
        expect(newClientDir).toBeDefined();
        expect(newClientDir.subTree.find(obj => obj.name === "testCustomFile3")).toBeDefined();
    });
});