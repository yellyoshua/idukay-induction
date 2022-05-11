import { describe, it, expect } from '@jest/globals';
import supertest from 'supertest';
import app from "./app.js"

describe("App", () => {
    describe("loggin middleware", () => {
        it("should log the request", async () => {
            const request = await supertest(app)
                .get("/logs")
                .set("Content-Type", "application/json")
                .set("Accept", "application/json");
            expect(request.status).toBe(200);
            expect(request.body.logs).toBeDefined();
            expect(request.body.logs.length).toBe(1);
        })
    })
})