import express from "express";

import { cartController } from "../controller/cart";

const cartRouter = express.Router();

cartRouter.get("/:id", cartController.getById);

cartRouter.get("/", cartController.getAll);

cartRouter.post("/", cartController.add);

cartRouter.patch("/:id", cartController.update);

cartRouter.delete("/:id", cartController.remove)

export default cartRouter;
