import express from "express"
import bodyParser from "body-parser"
import middlewares from "./middlewares/index.js"
import handlers from "./handlers/index.js"
import logsHelper from "./helpers/logs.helper.js"

const app = express()
const port = process.env.PORT || 3000

// add bodyParser to app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(middlewares.logging(logsHelper));

app.get("/logs", handlers.logsHandler);

app.use(middlewares.authentication);

// create a listener for the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default app;