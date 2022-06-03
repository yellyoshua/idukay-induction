import { describe, it, expect } from '@jest/globals';
import supertest from 'supertest';
import app from "./app.js"

describe("App", () => {
    describe("Basic handlers", () => {
        it("should response basic Hello World", async () => {
            const request = await supertest(app)
                .get("/")
                .set("Content-Type", "application/json")
                .set("Accept", "application/json");
            expect(request.status).toBe(200);
            expect(request.body).toEqual({
                message: "Hello World"
            });
        });
    });

    describe("users handlers", () => {
        it("should response all users", async () => {
            const request = await supertest(app)
                .get("/api/users")
                .set("Content-Type", "application/json")
                .set("Accept", "application/json");
            expect(request.status).toBe(200);
        });
    });
})