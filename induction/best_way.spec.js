const { describe, it, expect } = require("@jest/globals");
const bestWay = require("./best_way.js");

describe("best way", () => {
    it("should between (4, 7) the best way return [5, 6]", () => {
        expect(bestWay([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [4, 7])).toEqual([5, 6]);
    });
    it("should between (2, 3) the best way return []", () => {
        expect(bestWay([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3])).toEqual([]);
    });
    it("should between (2, 10) the best way return [1]", () => {
        expect(bestWay([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 10])).toEqual([1]);
    });
    it("should between (1, 10) the best way return []", () => {
        expect(bestWay([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 10])).toEqual([]);
    });
    it("should between (6, 5) the best way return [4, 2, 1, 3]", () => {
        expect(bestWay([10, 8, 6, 4, 2, 1, 3, 5, 7, 9], [6, 5])).toEqual([4, 2, 1, 3]);
    });
});