import { expect, it, jest, describe } from "@jest/globals";
import usersHandler from "./users.handler.js";

describe("user service", () => {
    describe("getUsers", () => {
        it("should return all users", async () => {
            const services = {
                usersService: {
                    getUsers: jest.fn().mockResolvedValue([
                        {
                            _id: "5e9f8f8f8f8f8f8f8f8f8f8",
                            name: "John Doe",
                        }
                    ]),
                }
            };

            const req = {};

            const res = {
                json: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
            };
           
            await usersHandler(services).handlerUsers(req, res);
            expect(services.usersService.getUsers).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith([
                {
                    _id: "5e9f8f8f8f8f8f8f8f8f8f8",
                    name: "John Doe",
                } 
            ]);
        });

        it("should return empty array", async () => {
            const services = {
                usersService: {
                    getUsers: jest.fn().mockResolvedValue([]),
                }
            };

            const req = {};

            const res = {
                json: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
            };
           
            await usersHandler(services).handlerUsers(req, res);
            expect(services.usersService.getUsers).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith([]);
        });
    });

    describe("updateUser", () => {
        it("should update user", async () => {
            const users = [
                {
                    _id: "5e9f8f8f8f8f8f8f8f8f8f8",
                    name: "John Doe",
                    country: "USA",
                    editable: true,
                }
            ];
            const services = {
                usersService: {
                    updateUser: jest.fn((id, data) => {
                        const user = users.find(u => u._id === id);
                        return {...user, ...data};
                    }),
                }
            };

            const req = {
                params: {
                    id: "5e9f8f8f8f8f8f8f8f8f8f8",
                },
                body: {
                    name: "John Doe",
                    country: "EC",
                }
            };

            const res = {
                json: jest.fn().mockReturnThis(),
                status: jest.fn().mockReturnThis(),
            };
           
            await usersHandler(services).handerUpdateUser(req, res);
            expect(services.usersService.updateUser).toHaveBeenCalled();
            expect(services.usersService.updateUser).toHaveBeenCalledWith("5e9f8f8f8f8f8f8f8f8f8f8", {
                name: "John Doe",
                country: "EC",
            })
            expect(res.status).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalledWith({
                _id: "5e9f8f8f8f8f8f8f8f8f8f8",
                name: "John Doe",
                country: "EC",
                editable: true,
            });
        });
    });
});