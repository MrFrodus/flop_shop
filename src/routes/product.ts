import express from "express";

import { productController } from "../controller/product";

const productRouter = express.Router();

productRouter.get("/:id", productController.getById);

productRouter.get("/join/:id", productController.getByIdwithRelation);

productRouter.get("/", productController.getAll);

productRouter.post("/", productController.add);

productRouter.patch("/:id", productController.update);

productRouter.delete("/:id", productController.remove);



export default productRouter;
