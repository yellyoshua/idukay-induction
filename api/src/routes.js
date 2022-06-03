export default function routes(app, handlers = {}) {
    const { usersHandler } = handlers;

    app.get("/api/users", usersHandler.handlerUsers);
    app.post("/api/user/:id", usersHandler.handerUpdateUser);
}