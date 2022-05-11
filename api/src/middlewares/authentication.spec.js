import { describe, it, expect, jest } from "@jest/globals";
import authentication from "./authentication"

describe("Authentication", () => {
    it("should the authentication be pass", () => {
        const req = {
            headers: {
                authorization: "Bearer 12345"
            }
        };
        const res = {
            status: jest.fn(),
        };
        const next = jest.fn();
        authentication(req, res, next);
        expect(req.headers.authorization).toBe("Bearer 12345");
        expect(res.status.mock.calls).toEqual([]);
        expect(next.mock.calls).toEqual([[]]);
    });
    it("should response with non token provided exeption and status 401", () => {
        const req = {
            headers: {}
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const next = jest.fn();
        authentication(req, res, next);
        expect(req.headers.authorization).toEqual(undefined);
        expect(res.status.mock.calls).toEqual([[401]]);
        expect(res.json.mock.calls).toEqual([[{ message: "No token provided" }]]);
        expect(next.mock.calls).toEqual([]);
    });
    it("should response as unauthorized and status 401", () => {
        const req = {
            headers: {
                authorization: "Beare"
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        }
        const next = jest.fn();
        authentication(req, res, next);
        expect(req.headers.authorization).toEqual("Beare");
        expect(res.status.mock.calls).toEqual([[401]]);
        expect(res.json.mock.calls).toEqual([[{ message: "Unauthorized" }]]);
        expect(next.mock.calls).toEqual([]);
    });
})