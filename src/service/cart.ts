import { BaseService } from "./baseService";
import { CartRepository, cartRepository } from "../repository/cart";

export class CartService extends BaseService {
  protected repository: CartRepository;

  constructor(repository: CartRepository) {
    super(repository);
  }
}

export const cartService = new CartService(cartRepository);
