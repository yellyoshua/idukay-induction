import "dotenv/config";
import mongoose from "mongoose";
import usersModel from "../src/models/users.model.js";

function dbConnect() {
	return new Promise((resolve, reject) => {
		const connectionResolver = (err) => {
			if (err)
				reject(err);
			resolve(mongoose.connection);
		};

		mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
		}, connectionResolver);
	});
}

async function cleanCollections() {
	console.log("Cleaning collections...");
	await dbConnect();
	await Promise.all([
		usersModel.deleteMany({}),
	]);
	console.log("Collections cleaned");
	process.exit(0);
}

cleanCollections();