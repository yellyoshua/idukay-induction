import usersHandler from "./users.handler.js";

export default function configureHandlers(services) {
    return {
        usersHandler: usersHandler(services),
    };
};