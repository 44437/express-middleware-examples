import express from "express"
import rateLimit from "express-rate-limit";

const app = express();
const MAIN_PORT = 8080;

const limiter = rateLimit({
  windowMs: 2000,
  limit: 1,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(limiter);
app.listen(MAIN_PORT);
