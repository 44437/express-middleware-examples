import express from "express";

const router = express.Router()

router.get("/", (req, res) =>{
  res.send([{name: "ercan"}]);
});

router.get("/:userID", (req, res) => {
  res.send(req.params.userID);
})

export { router as usersRouter };
