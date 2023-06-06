import { BaseService } from "./baseService";
import { ProductRepository, productRepository } from "../repository/product";

export class ProductService extends BaseService {
  protected repository: ProductRepository;

  constructor(repository: ProductRepository) {
    super(repository);
  }
}

export const productService = new ProductService(productRepository);
