import { staticData } from "../static/index";
import { IProduct } from "../models/product";
import { BaseRepository } from "./baseRepository";

export class ProductRepository extends BaseRepository<IProduct> {}

export const productRepository = new ProductRepository(
  "product",
  staticData.db.selectedFields.product.map((value) => {
    return "product." + value;
  })
);
