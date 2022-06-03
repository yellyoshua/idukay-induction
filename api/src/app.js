import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import repositories from "./repositories.js";
import configureServices from "./services/index.js";
import configureHandlers from "./handlers/index.js";
import routes from "./routes.js";

const services = configureServices(repositories);
const handlers = configureHandlers(services);

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app, handlers);
app.get("/", (req, res) => res.json({ message: "Hello World" }));

process.on("SIGINT", (err) => {
    console.log(err);
    console.log("\nStopping server...");
    mongoose.connection.close(() => {
        console.log("Disconnected");
        console.log("Server stopped");
        process.exit(0);
    });
    console.log("Server stopped");
    process.exit(0);
});

function onErrorConnect(err) {
    process.emit("SIGINT", err);
}

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

function startApp() {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`)
    })
}

app.on("error", onErrorConnect);

dbConnect()
    .then(startApp)
    .catch(onErrorConnect);

export default app;