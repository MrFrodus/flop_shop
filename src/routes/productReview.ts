import express from "express";

import { productReviewController } from "../controller/productReview";

const productReviewRouter = express.Router();

productReviewRouter.get("/:id", productReviewController.getById);

productReviewRouter.get("/", productReviewController.getAll);

productReviewRouter.post("/", productReviewController.add);

productReviewRouter.patch("/:id", productReviewController.update);

productReviewRouter.delete("/:id", productReviewController.remove)

export default productReviewRouter;
