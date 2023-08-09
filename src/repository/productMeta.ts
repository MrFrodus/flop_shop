import staticData from "../static/index";
import { IProductMeta } from "../models/productMeta";
import BaseRepository from "./baseRepository";

export class ProductMetaRepository extends BaseRepository<IProductMeta> {}

export const productMetaRepository = new ProductMetaRepository(
  "product_meta",
  staticData.db.selectedFields.productMeta.map((value) => {
    return `product_meta.${value}`;
  })
);
