import { BaseService } from "./baseService";
import { ProductRepository, productRepository } from "../repository/product";
import { BaseModel } from "../models/baseModel";
import { userRepository } from "../repository/user";

export class ProductService extends BaseService {
  protected repository: ProductRepository;

  constructor(repository: ProductRepository) {
    super(repository);
  }

  getByIdwithRelation = async (id: number): Promise<BaseModel | null> => {
    const productArray = await this.repository.getById(id);
    if (!productArray.length) {
      return null;
    };

    const productObject = productArray[0];

    const userArray = await userRepository.getById(productObject!.user_id);

    const userObject = userArray[0];

    const user = {
      id: userObject?.id,
      email: userObject?.email,
      admin: userObject?.admin,
      vendor: userObject?.vendor,
    }

    productObject!.user = userObject;

    return productObject!;
  };
}

export const productService = new ProductService(productRepository);
