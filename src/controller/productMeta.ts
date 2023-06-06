import { BaseController } from "./baseController";
import { ProductMetaService, productMetaService } from "../service/productMeta";


class ProductMetaController extends BaseController {
  protected service: ProductMetaService;

  constructor(service: ProductMetaService) {
    super(service);
  }
}

export const productMetaController = new ProductMetaController(productMetaService);
