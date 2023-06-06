import express from "express";

import { orderItemController } from "../controller/orderItem";

const orderItemRouter = express.Router();

orderItemRouter.get("/:id", orderItemController.getById);

orderItemRouter.get("/", orderItemController.getAll);

orderItemRouter.post("/", orderItemController.add);

orderItemRouter.patch("/:id", orderItemController.update);

orderItemRouter.delete("/:id", orderItemController.remove)

export default orderItemRouter;
