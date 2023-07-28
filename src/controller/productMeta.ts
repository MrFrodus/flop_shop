import { BaseController } from "./baseController";
import { ProductMetaService, productMetaService } from "../service/productMeta";
import { IProductMeta } from "src/models/productMeta";

class ProductMetaController extends BaseController<IProductMeta> {
  protected service: ProductMetaService;

  constructor(service: ProductMetaService) {
    super(service);
  }
}

export const productMetaController = new ProductMetaController(
  productMetaService
);
