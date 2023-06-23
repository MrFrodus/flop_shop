import { BaseService } from "./baseService";
import { ProductMetaRepository, productMetaRepository } from "../repository/productMeta";
import { IProductMeta } from "../models/productMeta";

export class ProductMetaService extends BaseService<IProductMeta> {
  protected repository: ProductMetaRepository;

  constructor(repository: ProductMetaRepository) {
    super(repository);
  }
}

export const productMetaService = new ProductMetaService(productMetaRepository);
