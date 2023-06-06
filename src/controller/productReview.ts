import { BaseController } from "./baseController";
import { ProductReviewService, productReviewService } from "../service/productReview";


class ProductReviewController extends BaseController {
  protected service: ProductReviewService;

  constructor(service: ProductReviewService) {
    super(service);
  }
}

export const productReviewController = new ProductReviewController(productReviewService);
