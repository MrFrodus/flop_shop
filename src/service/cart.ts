import { BaseService } from "./baseService";
import { CartRepository, cartRepository } from "../repository/cart";
import { cartItemRepository } from "../repository/cartItem";
import { ICart } from "../models/cart";

export class CartService extends BaseService<ICart> {
  protected repository: CartRepository;

  constructor(repository: CartRepository) {
    super(repository);
  }

  getWithCartItems = async (cart_id: number): Promise<ICart | null> => {
    const [cart] = await this.repository.getById(cart_id);
    if (!cart) {
      return null;
    }

    const cart_items = await cartItemRepository.getByCartId(cart_id);

    cart.cart_items = cart_items;

    return cart;
  };
}

export const cartService = new CartService(cartRepository);
