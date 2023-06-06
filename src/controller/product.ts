import { BaseController } from "./baseController";
import { ProductService, productService } from "../service/product";


class ProductController extends BaseController {
  protected service: ProductService;

  constructor(service: ProductService) {
    super(service);
  }
}

export const productController = new ProductController(productService);
