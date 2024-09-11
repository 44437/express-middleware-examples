import express from 'express';

const app = express();
const MAIN_PORT = 8080;

app.listen(MAIN_PORT, () => {
  console.log(`The app is listening on the port ${MAIN_PORT}`);
});

app.use("/users", (req, res, next) => {
  if (req.method === "GET") {
    console.log("This middleware runs for GET requests on /users");// You can check in this way or ... check the line[29]
  }
  // next("route") // It provides you to skip all middlewares including the same route as this middleware.
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 1")

  res.on("finish", () => {
    console.log("Middleware 3");
    console.log(res.statusMessage);// It can be used as the last function after the response sent, but it cannot permit to send a response again.
  })

  next()
}, (req, res, next) => {
  console.log("Middleware 2");// It doesn't work lastly, it works in order.
  // The upper side of this code may be called a middleware and this part may be called a handler. Along with this, you don't need conditions as you see in the line[12].
  next();
});

app.get("/users/", (req, res, next) =>{
  res.statusMessage = "It worked well";

  console.log("Handler 1");

  res.send([{name: "ercan"}]);

  console.log("Handler 2");

  next()

  console.log("Handler 3");
});

app.use((req, res, next) => {
  console.log("This middleware runs lastly");
  next();
});

// TODO ****************************************************************************************************************

const middlewareA = (res, req, next) => {
  console.log("Middleware A");
  next();
}

const middlewareB = (res, req, next) => {
  console.log("Middleware B");
  next();
}

app.get("/users/:userID", [middlewareA, middlewareB],(req, res) => {
  console.log("Well Done! You easily managed to add and run the middlewares this way");
  res.send(req.params.userID);
})

app.listen(8091);
