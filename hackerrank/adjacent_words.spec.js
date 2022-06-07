const {describe, it, expect} = require("@jest/globals");
const remove_odd = require("./adjacent_words.js");
const fs = require("fs");

describe("remove_odd", () => {
    it("should return arr with number of replaces of case 1", () => {
        const plainText = fs.readFileSync("./0x01.txt", "utf8");
        expect(remove_odd(plainText.split("\n"))).toEqual([
            0, 2, 3, 1,
            1, 4, 0, 1,
        ]);
    });

    it("should return arr with number of replaces of case 3", () => {
        const plainText = fs.readFileSync("./0x03.txt", "utf8");
        expect(remove_odd(plainText.split("\n"))).toEqual([
            6, 3,
        ]);
    });

    it("should return arr with number of replaces of case 5", () => {
        const plainText = fs.readFileSync("./0x05.txt", "utf8");
        expect(remove_odd(plainText.split("\n"))).toEqual([
            39, 249, 395,  25, 182,   7, 344,
            310, 262, 203, 231, 185, 177,  58,
            174, 315, 329, 182, 218, 119, 206,
            316, 117,   7,  88,
        ])
    });
});