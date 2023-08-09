import BaseService from "./baseService";
import {
  ProductReviewRepository,
  productReviewRepository,
} from "../repository/productReview";
import { IProductReview } from "../models/productReview";

export class ProductReviewService extends BaseService<IProductReview> {
  protected repository: ProductReviewRepository;
}

export const productReviewService = new ProductReviewService(
  productReviewRepository
);
