import express from "express";

import { orderItemController } from "../controller/orderItem";

const orderItemRouter = express.Router();

orderItemRouter.get("/:id(\\d+)/", orderItemController.getById);

orderItemRouter.get("/", orderItemController.getAll);

orderItemRouter.post("/", orderItemController.add);

orderItemRouter.patch("/:id(\\d+)/", orderItemController.update);

orderItemRouter.delete("/:id(\\d+)/", orderItemController.delete);

export default orderItemRouter;
