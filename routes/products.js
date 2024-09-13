import express from "express";

const router = express.Router()

router.get("/", (req, res) =>{
  res.send([{name: "product"}]);
});

router.get("/:productID", (req, res) => {
  res.send(req.params.productID);
})

export { router as productsRouter };
