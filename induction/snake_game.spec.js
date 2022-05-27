const { describe, it, expect } = require("@jest/globals");
const snakeGame = require("./snake_game.js");

describe("snakeGame", () => {
    it("should return the correct result for the sample input", () => {
        expect(snakeGame([
            [1, 1, 1, 1],
            [0, 1, 0, 1],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
        ])).toStrictEqual([
            [2, 2, 1, 1],
            [0, 2, 0, 1],
            [0, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 2, 2],
        ]);
    });

    it("should return the correct result for the sample input", () => {
        expect(snakeGame([
            [0, 1, 1, 1],
            [0, 1, 0, 1],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
        ])).toStrictEqual([
            [0, 2, 1, 1],
            [0, 2, 0, 1],
            [0, 2, 0, 0],
            [0, 2, 2, 0],
            [0, 0, 2, 2],
        ]);
    });

    it("should return the correct result for the sample input", () => {
        expect(snakeGame([
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 1, 1, 1],
            [0, 0, 1, 1],
        ])).toStrictEqual([
            [2, 2, 2, 2],
            [0, 0, 0, 2],
            [0, 0, 0, 2],
            [0, 1, 1, 2],
            [0, 0, 1, 2],
        ]);
    });

    it("should return the correct result for the sample input", () => {
        expect(snakeGame([
            [1, 1, 1, 1],
            [0, 1, 0, 1],
            [0, 1, 0, 1],
            [0, 1, 1, 1],
            [0, 0, 0, 1],
        ])).toStrictEqual([
            [2, 2, 1, 1],
            [0, 2, 0, 1],
            [0, 2, 0, 1],
            [0, 2, 2, 2],
            [0, 0, 0, 2],
        ]);
    });

    it("should return the correct result for the sample input", () => {
        expect(snakeGame([
            [1, 1, 1, 1, 1, 1],
            [1, 0, 1, 1, 0, 1],
            [1, 1, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 1, 1],
        ])).toStrictEqual([
            [2, 1, 1, 1, 1, 1],
            [2, 0, 1, 1, 0, 1],
            [2, 2, 2, 1, 0, 1],
            [0, 0, 2, 0, 1, 1],
            [0, 0, 2, 0, 1, 0],
            [0, 0, 2, 2, 2, 2],
        ]);
    });

    it("should return the correct result for the sample input", () => {
        expect(snakeGame([
            [1, 1, 1, 1],
            [0, 1, 0, 1],
            [0, 0, 0, 1],
            [0, 1, 1, 1],
            [0, 0, 1, 1],
        ])).toStrictEqual([
            [2, 2, 2, 2],
            [0, 1, 0, 2],
            [0, 0, 0, 2],
            [0, 1, 1, 2],
            [0, 0, 1, 2],
        ]);
    });


    it("should return the correct result for the sample input", () => {
        expect(snakeGame([
            [1, 1, 1, 1],
            [0, 1, 0, 1],
            [0, 1, 0, 1],
            [0, 0, 1, 1],
            [0, 0, 1, 1],
        ])).toStrictEqual([
            [2, 2, 2, 2],
            [0, 1, 0, 2],
            [0, 1, 0, 2],
            [0, 0, 1, 2],
            [0, 0, 1, 2],
        ]);
    });
});