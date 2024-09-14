import express from 'express';
import {usersRouter} from "./routes/users.js";
import {productsRouter} from "./routes/products.js";

const app = express();
const MAIN_PORT = 8080;

app.set('case sensitive routing', true);

app.listen(MAIN_PORT, () => {
  console.log(`The app is listening on the port ${MAIN_PORT}`);
});

app.use("/users", usersRouter)
app.use("/products", productsRouter)
