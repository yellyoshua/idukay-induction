export default function usersService(repositories = {}) {
    const {
        usersRepository,
    } = repositories;

    return {
        async getUsers() {
            const users = await usersRepository.find({});
            return users;
        },
        async updateUser(id, data) {
            const user = await usersRepository.findOne({ _id: id });
            if (!user) throw new Error('User not found');
            return usersRepository.update({ _id: id }, data);
        },
        async createUser(data) {
            const user = await usersRepository.create(data);
            return user;
        }
    };
}