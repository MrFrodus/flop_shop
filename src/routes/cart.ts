import express from "express";

import { cartController } from "../controller/cart";

const cartRouter = express.Router();

cartRouter.get("/:id(\\d+)/", cartController.getById);

cartRouter.get("/", cartController.getAll);

cartRouter.post("/", cartController.add);

cartRouter.patch("/:id(\\d+)/", cartController.update);

cartRouter.delete("/:id(\\d+)/", cartController.remove);

export default cartRouter;
