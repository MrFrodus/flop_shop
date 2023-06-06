import { BaseService } from "./baseService";
import { ProductReviewRepository, productReviewRepository } from "../repository/productReview";

export class ProductReviewService extends BaseService {
  protected repository: ProductReviewRepository;

  constructor(repository: ProductReviewRepository) {
    super(repository);
  }
}

export const productReviewService = new ProductReviewService(productReviewRepository);
