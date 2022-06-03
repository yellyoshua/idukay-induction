import repositoryController from "./controllers/repository.controller.js";
import usersModel from "./models/users.model.js";

export default {
    usersRepository: repositoryController(usersModel),
};