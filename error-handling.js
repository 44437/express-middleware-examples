import express from "express"

const app = express();
const MAIN_PORT = 8080;

app.use((req, res, next) => {
  if (req.method !== "GET") {
    const error = new Error("Method - Not Supported");
    error.status = 404;
    next(error);
  }

  next();
});

app.get("/users", (req, res, next) => {
  throw new Error("Something went wrong.");
});

app.use((err, req, res, _) => {
  console.error(err.stack);
  res.status(500).send(err.stack);
});

app.listen(MAIN_PORT);