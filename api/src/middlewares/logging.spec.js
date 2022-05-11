import { describe, it, expect, jest } from "@jest/globals";
import logging from "./logging"
import logsHelper from "../helpers/logs.helper.js"

describe("Logging middleware", () => {
    it("should log the request", () => {
        const req = {
            method: "GET",
            url: "/api/users",
            log: {}
        };
        const res = {
            status: jest.fn(),
        };
        const next = jest.fn();
        logging(logsHelper)(req, res, next);
        expect(req.log.info).toBeDefined();
        expect(req.log.warn).toBeDefined();
        expect(req.log.error).toBeDefined();
        expect(req.logs.length).toEqual(1);
        expect(res.status.mock.calls).toEqual([]);
        expect(next.mock.calls).toEqual([[]]);
    });
    it("should make a thrown error when log is not provided", () => {
        const req = {};
        const res = {};
        const next = jest.fn();
        expect(() => logging()(req, res, next)).toThrow(/Logger is not defined/);
    })
});