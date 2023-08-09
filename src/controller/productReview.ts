import BaseController from "./baseController";
import {
  ProductReviewService,
  productReviewService,
} from "../service/productReview";
import { IProductReview } from "../models/productReview";

class ProductReviewController extends BaseController<IProductReview> {
  protected service: ProductReviewService;
}

const productReviewController = new ProductReviewController(
  productReviewService
);

export default productReviewController;
