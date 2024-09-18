import express from "express"

const app = express();
const MAIN_PORT = 8080;

app.use(express.static("public"))

app.listen(MAIN_PORT);
