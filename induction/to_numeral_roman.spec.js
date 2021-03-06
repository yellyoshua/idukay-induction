const { describe, it, expect } = require('@jest/globals');
const to_numeral_roman = require('./to_numeral_roman');

describe('to_numeral_roman', () => {
    it("should convert 120 to CXX", () => {
        expect(to_numeral_roman(120)).toBe("CXX");
    });
    it("should convert 5 to V", () => {
        expect(to_numeral_roman(5)).toBe("V");
    });
    it("should convert 2121 to MMCXXI", () => {
        expect(to_numeral_roman(2121)).toBe("MMCXXI");
    });
    it("should convert 3 to III", () => {
        expect(to_numeral_roman(3)).toBe("III");
    });
    it("should convert 2021 to MMXXI", () => {
        expect(to_numeral_roman(2021)).toBe("MMXXI");
    });
});