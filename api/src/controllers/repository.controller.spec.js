import { describe, it, expect, jest, afterEach } from "@jest/globals";
import repositoryController from "./repository.controller.js";
import usersModel from "../models/users.model.js";

describe("repositoryController", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return a methods findOne, find, create, update", () => {
        const controller = repositoryController({});
        expect(typeof controller.findOne).toBe("function");
        expect(typeof controller.find).toBe("function");
        expect(typeof controller.create).toBe("function");
        expect(typeof controller.update).toBe("function");
    });

    describe("getAll", () => {
        it("should return all users", async () => {
            const users = [
                {
                    code: "123",
                    name: "John Doe",
                    country: "USA",
                    editable: true,
                },
                {
                    code: "456",
                    name: "Jane Doe",
                    country: "USA",
                    editable: true,
                },
            ];
            jest.spyOn(usersModel, "find").mockImplementation(() => Promise.resolve(users));
            const result = await repositoryController(usersModel)
                .find({});
            expect(result).toEqual(users);
            expect(usersModel.find).toHaveBeenCalled();
            expect(usersModel.find).toHaveBeenCalledWith({});
        });

        it("should filter users", async () => {
            const users = [
                {
                    code: "123",
                    name: "John Doe",
                    country: "EC",
                    editable: true,
                },
                {
                    code: "456",
                    name: "Jane Doe",
                    country: "USA",
                    editable: true,
                },
            ];
            jest.spyOn(usersModel, "find").mockImplementation((filter) => {
                return Promise.resolve(
                    users.filter(user => user.country === filter.country)
                );
            });
            const result = await repositoryController(usersModel)
                .find({ country: "USA" });

            expect(result).toEqual([
                users[1],
            ]);
            expect(usersModel.find).toHaveBeenCalled();
            expect(usersModel.find).toHaveBeenCalledWith({ country: "USA" });
        });
    });

    describe("getOne", () => {
        it("should return one user", async () => {
            const users = [
                {
                    code: "123",
                    name: "John Doe",
                    country: "USA",
                    editable: true,
                },
                {
                    code: "456",
                    name: "Dayan Doe",
                    country: "EC",
                    editable: true,
                },
            ];
            jest.spyOn(usersModel, "findOne").mockImplementation((filter) => {
                return Promise.resolve(
                    users.find(user => user.code === filter.code)
                )
            });
            const result = await repositoryController(usersModel)
                .findOne({ code: "123" });
            expect(result).toEqual(users[0]);
            expect(usersModel.findOne).toHaveBeenCalled();
            expect(usersModel.findOne).toHaveBeenCalledWith({ code: "123" });
        });

        it("should return null if user not found", async () => {
            const users = [
                {
                    code: "123",
                    name: "John Doe",
                    country: "USA",
                    editable: true,
                },
                {
                    code: "456",
                    name: "Dayan Doe",
                    country: "EC",
                    editable: true,
                },
            ];

            jest.spyOn(usersModel, "findOne").mockImplementation((filter) => {
                const foundUser = users.find(user => user.code === filter.code);
                return Promise.resolve(
                    foundUser ?? null
                )
            });

            const result = await repositoryController(usersModel)
                .findOne({ code: "789" });
            
            expect(result).toEqual(null);
            expect(usersModel.findOne).toHaveBeenCalled();
            expect(usersModel.findOne).toHaveBeenCalledWith({ code: "789" });
        });
    });

    describe("create", () => {
        it("should create a user", async () => {
            jest.spyOn(usersModel, "create").mockImplementation();
            await repositoryController(usersModel)
                .create({ code: "123", name: "John Doe", country: "USA" });
            expect(usersModel.create).toHaveBeenCalled();
            expect(usersModel.create).toHaveBeenCalledWith({ code: "123", name: "John Doe", country: "USA" });
        });

        it("should throw an error if no data provided", async () => {
            jest.spyOn(usersModel, "create").mockImplementation();
            await expect(repositoryController(usersModel)
                .create({}))
                .rejects.toThrow("No data provided");
            expect(usersModel.create).not.toHaveBeenCalled();
        });
    });

    describe("update", () => {
        it("should update a user", async () => {
            jest.spyOn(usersModel, "updateOne").mockImplementation(() => {
                return Promise.resolve({
                    name: "John Doe",
                    code: "123",
                    country: "USA",
                });
            });
            const result = await repositoryController(usersModel)
                .update({ code: "123" }, { name: "John Doe" });
            expect(result).toEqual({
                name: "John Doe",
                code: "123",
                country: "USA",
            });
            expect(usersModel.updateOne).toHaveBeenCalled();
            expect(usersModel.updateOne).toHaveBeenCalledWith({ code: "123" }, { name: "John Doe" });
        });

        it("should throw an error if no data provided", async () => {
            jest.spyOn(usersModel, "updateOne").mockImplementation();
            await expect(repositoryController(usersModel)
                .update({}, {}))
                .rejects.toThrow("No data provided");
            expect(usersModel.updateOne).not.toHaveBeenCalled();
        });
    });
});