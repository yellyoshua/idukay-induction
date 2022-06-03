import { expect, it, describe, jest } from '@jest/globals';
import usersService from "./users.service.js";

describe("user service", () => {
    describe("getUsers", () => {
        it("should return all users", async () => {
            const repositories = {
                usersRepository: {
                    find: jest.fn().mockResolvedValue([
                        {
                            _id: "5e9f8f8f8f8f8f8f8f8f8f8",
                            name: "John Doe",
                            country: "USA",
                            editable: true,
                        }
                    ]),
                }
            }

            await expect(usersService(repositories).getUsers()).resolves.toHaveLength(1);
            expect(repositories.usersRepository.find).toHaveBeenCalled();
            expect(repositories.usersRepository.find).toHaveBeenCalledWith({});
        });

        it("should return empty array", async () => {
            const repositories = {
                usersRepository: {
                    find: jest.fn().mockResolvedValue([]),
                }
            }

            await expect(usersService(repositories).getUsers()).resolves.toHaveLength(0);
            expect(repositories.usersRepository.find).toHaveBeenCalled();
            expect(repositories.usersRepository.find).toHaveBeenCalledWith({});
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
            const repositories = {
                usersRepository: {
                    findOne: jest.fn().mockResolvedValue(users[0]),
                    update: jest.fn((query, data) => {
                        const user = users.find(u => u._id === query._id);
                        return {...user, ...data};
                    }),
                }
            }

            await expect(usersService(repositories).updateUser("5e9f8f8f8f8f8f8f8f8f8f8", {
                name: "John Doe",
                country: "EC",
                editable: false,
            })).resolves.toEqual({
                _id: "5e9f8f8f8f8f8f8f8f8f8f8",
                name: "John Doe",
                country: "EC",
                editable: false,
            });
            expect(repositories.usersRepository.findOne).toHaveBeenCalled();
            expect(repositories.usersRepository.findOne).toHaveBeenCalledWith({ _id: "5e9f8f8f8f8f8f8f8f8f8f8" });
            expect(repositories.usersRepository.update).toHaveBeenCalled();
            expect(repositories.usersRepository.update).toHaveBeenCalledWith({ _id: "5e9f8f8f8f8f8f8f8f8f8f8" }, {
                name: "John Doe",
                country: "EC",
                editable: false,
            });
        });

        it("should throw error", async () => {
            const repositories = {
                usersRepository: {
                    findOne: jest.fn().mockResolvedValue(null),
                    update: jest.fn(),
                }
            }

            await expect(usersService(repositories).updateUser("5e9f8f8f8f8f8f8f8f8f8f8", {
                name: "John Doe",
                country: "EC",
                editable: false,
            })).rejects.toThrowError("User not found");
            expect(repositories.usersRepository.findOne).toHaveBeenCalled();
            expect(repositories.usersRepository.findOne).toHaveBeenCalledWith({ _id: "5e9f8f8f8f8f8f8f8f8f8f8" });
            expect(repositories.usersRepository.update).not.toHaveBeenCalled();
        });
    });
});
