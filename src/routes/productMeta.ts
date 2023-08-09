import express from "express";
import productMetaController from "../controller/productMeta";

const productMetaRouter = express.Router();

productMetaRouter.get("/:id(\\d+)/", productMetaController.getById);

productMetaRouter.get("/", productMetaController.getAll);

productMetaRouter.post("/", productMetaController.add);

productMetaRouter.patch("/:id(\\d+)/", productMetaController.update);

productMetaRouter.delete("/:id(\\d+)/", productMetaController.delete);

export default productMetaRouter;
