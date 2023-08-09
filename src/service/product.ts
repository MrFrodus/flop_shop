import BaseService from "./baseService";
import { ProductRepository, productRepository } from "../repository/product";
import { userRepository } from "../repository/user";
import { IProduct } from "../models/product";

export class ProductService extends BaseService<IProduct> {
  protected repository: ProductRepository;

  getByIdwithRelation = async (id: number): Promise<IProduct | null> => {
    const [product] = await this.repository.getById(id);
    if (!product) {
      return null;
    }

    const [user] = await userRepository.getById(product.user_id);

    if (user) {
      product.user = user;
    } else {
      product.user = null;
    }

    return product;
  };
}

export const productService = new ProductService(productRepository);
