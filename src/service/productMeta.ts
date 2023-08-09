import BaseService from "./baseService";
import {
  ProductMetaRepository,
  productMetaRepository,
} from "../repository/productMeta";
import { IProductMeta } from "../models/productMeta";

export class ProductMetaService extends BaseService<IProductMeta> {
  protected repository: ProductMetaRepository;
}

export const productMetaService = new ProductMetaService(productMetaRepository);
