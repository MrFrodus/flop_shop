import express from "express";
import productReviewController from "../controller/productReview";

const productReviewRouter = express.Router();

productReviewRouter.get("/:id(\\d+)/", productReviewController.getById);

productReviewRouter.get("/", productReviewController.getAll);

productReviewRouter.post("/", productReviewController.add);

productReviewRouter.patch("/:id(\\d+)/", productReviewController.update);

productReviewRouter.delete("/:id(\\d+)/", productReviewController.delete);

export default productReviewRouter;
