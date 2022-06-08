const { describe, it, expect, xit } = require("@jest/globals");
const sequence = require("./sequence.js");

describe("sequence", () => {
    it("should return 1 from the index 0", () => {
        expect(sequence(0)).toEqual(1);
    });

    it("should return 4 from the index 5", () => {
        expect(sequence(5)).toEqual(4);
    });

    it("should return 39 from the index 76", () => {
        expect(sequence(76)).toEqual(39);
    });

    it("should return 272712 from the index 545421", () => {
        expect(sequence(545421)).toEqual(272712);
    });

    it("should return _ from the index 50", () => {
        expect(sequence(50)).toEqual(26);
    });

    it("should return _ from the index 25", () => {
        expect(sequence(25)).toEqual(14);
    });

    it("should return 43561820561586185 from the index 87123641123172368", () => {
        expect(sequence(87123641123172368)).toEqual(43561820561586185);
    });

    it("should return 40619906369564188 from the index 81239812739128371", () => {
        expect(sequence(81239812739128371)).toEqual(40619906369564188);
    });
});