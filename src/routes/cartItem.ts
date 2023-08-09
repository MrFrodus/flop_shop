import express from "express";
import cartItemController from "../controller/cartItem";

const cartItemRouter = express.Router();

cartItemRouter.get("/:id(\\d+)/", cartItemController.getById);

cartItemRouter.get("/", cartItemController.getAll);

cartItemRouter.get("/join/:id(\\d+)/", cartItemController.getByIdWithRelation);

cartItemRouter.post("/", cartItemController.add);

cartItemRouter.patch("/:id(\\d+)/", cartItemController.update);

cartItemRouter.delete("/:id(\\d+)/", cartItemController.delete);

cartItemRouter.delete("/cart/:id(\\d+)/", cartItemController.deleteByCartId);

cartItemRouter.get("/cart/:id(\\d+)/", cartItemController.getByCartId);

cartItemRouter.post("/ids", cartItemController.getMany);

export default cartItemRouter;
