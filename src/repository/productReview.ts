import { staticData } from "../static/index";
import { IProductReview } from "../models/productReview";
import { BaseRepository } from "./baseRepository";

export class ProductReviewRepository extends BaseRepository<IProductReview> {}

export const productReviewRepository = new ProductReviewRepository(
  "product_review",
  staticData.db.selectedFields.productReview.map((value) => {
    return "product_review." + value;
  })
);
