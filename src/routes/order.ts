import express from "express";

import { orderController } from "../controller/order";

const orderRouter = express.Router();

orderRouter.get("/:id(\\d+)/", orderController.getById);

orderRouter.get("/", orderController.getAll);

orderRouter.post("/", orderController.add);

orderRouter.patch("/:id(\\d+)/", orderController.update);

orderRouter.delete("/:id(\\d+)/", orderController.delete);

orderRouter.post("/newOrder", orderController.createNewOrder);

export default orderRouter;
