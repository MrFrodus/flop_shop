import express from "express";

import shippingController from "../controller/shipping";

const shippingRouter = express.Router();

shippingRouter.get("/:id(\\d+)/", shippingController.getById);

shippingRouter.get("/", shippingController.getAll);

shippingRouter.post("/", shippingController.add);

shippingRouter.patch("/:id(\\d+)/", shippingController.update);

shippingRouter.delete("/:id(\\d+)/", shippingController.delete);

export default shippingRouter;
