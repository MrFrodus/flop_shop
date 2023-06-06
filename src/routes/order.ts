import express from "express";

import { orderController } from "../controller/order";

const orderRouter = express.Router();

orderRouter.get("/:id", orderController.getById);

orderRouter.get("/", orderController.getAll);

orderRouter.post("/", orderController.add);

orderRouter.patch("/:id", orderController.update);

orderRouter.delete("/:id", orderController.remove)

export default orderRouter;
