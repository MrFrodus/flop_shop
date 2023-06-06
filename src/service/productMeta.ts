import { BaseService } from "./baseService";
import { ProductMetaRepository, productMetaRepository } from "../repository/productMeta";

export class ProductMetaService extends BaseService {
  protected repository: ProductMetaRepository;

  constructor(repository: ProductMetaRepository) {
    super(repository);
  }
}

export const productMetaService = new ProductMetaService(productMetaRepository);
