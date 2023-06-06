import express from "express";

import { cartItemController } from "../controller/cartItem";

const cartItemRouter = express.Router();

cartItemRouter.get("/:id", cartItemController.getById);

cartItemRouter.get("/", cartItemController.getAll);

cartItemRouter.post("/", cartItemController.add);

cartItemRouter.patch("/:id", cartItemController.update);

cartItemRouter.delete("/:id", cartItemController.remove)

export default cartItemRouter;
