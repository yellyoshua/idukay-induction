export default function usersHandler(services = {}) {
    const {
        usersService,
    } = services;
    return {
        async handlerUsers(req, res) {
            const users = await usersService.getUsers();
            return res.status(200).json(users);
        },
        async handerUpdateUser(req, res) {
            const userId = req.params.id;
            const newUser = req.body;
            const user = await usersService.updateUser(userId, newUser);
            return res.status(200).json(user);
        },
    }
}