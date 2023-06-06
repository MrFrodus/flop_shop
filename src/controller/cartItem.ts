import { BaseController } from "./baseController";
import { CartItemService, cartItemService } from "../service/cartItem";


class CartItemController extends BaseController {
  protected service: CartItemService;

  constructor(service: CartItemService) {
    super(service);
  }
}

export const cartItemController = new CartItemController(cartItemService);
