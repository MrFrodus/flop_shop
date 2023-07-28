import express from "express";

import { cartController } from "../controller/cart";
import { updateCartValidation, addCartValidation } from "../middleware/cart";

const cartRouter = express.Router();

cartRouter.get("/:id(\\d+)/", cartController.getById);

cartRouter.get("/", cartController.getAll);

cartRouter.post("/", addCartValidation, cartController.add);

cartRouter.patch("/:id(\\d+)/", updateCartValidation, cartController.update);

cartRouter.delete("/:id(\\d+)/", cartController.delete);

cartRouter.get("/join/:id(\\d+)/", cartController.getWithCartItems);

export default cartRouter;
