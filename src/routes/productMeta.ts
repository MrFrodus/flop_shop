import express from "express";

import { productMetaController } from "../controller/productMeta";

const productMetaRouter = express.Router();

productMetaRouter.get("/:id", productMetaController.getById);

productMetaRouter.get("/", productMetaController.getAll);

productMetaRouter.post("/", productMetaController.add);

productMetaRouter.patch("/:id", productMetaController.update);

productMetaRouter.delete("/:id", productMetaController.remove)

export default productMetaRouter;
