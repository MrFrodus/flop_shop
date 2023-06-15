import express from "express";

import { cartItemController } from "../controller/cartItem";

const cartItemRouter = express.Router();

cartItemRouter.get("/:id(\\d+)/", cartItemController.getById);

cartItemRouter.get("/", cartItemController.getAll);

cartItemRouter.post("/", cartItemController.add);

cartItemRouter.patch("/:id(\\d+)/", cartItemController.update);

cartItemRouter.delete("/:id(\\d+)/", cartItemController.remove);

export default cartItemRouter;
