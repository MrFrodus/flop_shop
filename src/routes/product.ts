import express from "express";

import { productController } from "../controller/product";

const productRouter = express.Router();

productRouter.get("/:id(\\d+)/", productController.getById);

productRouter.get("/join/:id(\\d+)/", productController.getByIdwithRelation);

productRouter.get("/", productController.getAll);

productRouter.post("/", productController.add);

productRouter.patch("/:id(\\d+)/", productController.update);

productRouter.delete("/:id(\\d+)/", productController.delete);

export default productRouter;
