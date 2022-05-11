import { describe, it, expect, jest } from "@jest/globals";
import logsHandler from "./logs.handler.js";

describe("Logs handler", () => {
    it("should return logs", () => {
        const req = {
            logs: [
                {
                    message: "Log message",
                    typo: "info",
                    timestamp: "2020-01-01T00:00:00.000Z"
                }
            ],
        };
        const res = {
            json: jest.fn().mockReturnThis(),
            status: jest.fn(),
        };
        const next = jest.fn();
        logsHandler(req, res, next);
        expect(res.status.mock.calls).toEqual([[200]]);
        expect(res.json.mock.calls).toEqual([[{
            logs: [
                {
                    message: "Log message",
                    typo: "info",
                    timestamp: "2020-01-01T00:00:00.000Z"
                }
            ]
        }]]);
        expect(next.mock.calls).toEqual([]);
    });
})