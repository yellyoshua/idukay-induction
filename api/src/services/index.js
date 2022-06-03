import usersService from "./users.service.js";

export default function configureServices(repositories = {}) {
    return {
        usersService: usersService(repositories),
    };
}