import express from "express";

import { cartController } from "../controller/cart";
import { updateCartItemValidation, addCartItemValidation } from "src/middleware/cartItem";

const cartRouter = express.Router();

cartRouter.get("/:id(\\d+)/", cartController.getById);

cartRouter.get("/", cartController.getAll);

cartRouter.post("/", addCartItemValidation, cartController.add);

cartRouter.patch("/:id(\\d+)/", updateCartItemValidation, cartController.update);

cartRouter.delete("/:id(\\d+)/", cartController.delete);

cartRouter.get("/join/:id(\\d+)/", cartController.getWithCartItems);

export default cartRouter;
