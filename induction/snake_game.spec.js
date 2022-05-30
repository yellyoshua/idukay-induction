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
            'RIGHT', 'DOWN',
            'DOWN',  'DOWN',
            'RIGHT', 'DOWN',
            'RIGHT', 'END'
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
            'RIGHT', 'DOWN',
            'DOWN',  'DOWN',
            'RIGHT', 'DOWN',
            'RIGHT', 'END'  
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
            'RIGHT', 'RIGHT',
            'RIGHT', 'DOWN',
            'DOWN',  'DOWN',
            'DOWN',  'END'
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
            'RIGHT', 'DOWN',
            'DOWN',  'DOWN',
            'RIGHT', 'RIGHT',
            'DOWN',  'END'
          ]);
    });

    it("should return the correct result for the sample input", () => {
        expect(snakeGame([
            [1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0],
            [1, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1],
        ])).toStrictEqual([
            'RIGHT', 'RIGHT',
            'RIGHT', 'DOWN',
            'DOWN',  'LEFT',
            'DOWN',  'DOWN',
            'DOWN',  'RIGHT',
            'RIGHT', 'RIGHT',
            'END'
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
            'DOWN',  'DOWN',
            'RIGHT', 'RIGHT',
            'DOWN',  'DOWN',
            'DOWN',  'RIGHT',
            'RIGHT', 'RIGHT',
            'END'
          ]);
    });

    it("should return the correct result for the sample input", () => {
        expect(snakeGame([
            [1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1],
            [0, 0, 1, 0, 1, 1],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 1, 1, 1, 1],
        ])).toStrictEqual([
            'RIGHT', 'RIGHT',
            'RIGHT', 'RIGHT',
            'RIGHT', 'DOWN', 
            'DOWN',  'DOWN', 
            'LEFT',  'DOWN', 
            'DOWN',  'RIGHT',
            'END'   
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
            'RIGHT', 'DOWN',
            'RIGHT', 'RIGHT',
            'DOWN',  'DOWN',
            'DOWN',  'DOWN',
            'END'
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
            'RIGHT', 'DOWN',
            'RIGHT', 'RIGHT',
            'DOWN',  'DOWN',
            'DOWN',  'DOWN',
            'END'
          ]);
    });
});