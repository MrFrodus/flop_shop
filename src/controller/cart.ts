import { BaseController } from "./baseController";
import { CartService, cartService } from "../service/cart";


class CartController extends BaseController {
  protected service: CartService;

  constructor(service: CartService) {
    super(service);
  }
}

export const cartController = new CartController(cartService);
