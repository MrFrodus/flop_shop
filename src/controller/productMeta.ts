import { IProductMeta } from "src/models/productMeta";
import BaseController from "./baseController";
import { ProductMetaService, productMetaService } from "../service/productMeta";

class ProductMetaController extends BaseController<IProductMeta> {
  protected service: ProductMetaService;
}

const productMetaController = new ProductMetaController(productMetaService);

export default productMetaController;
