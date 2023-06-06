import { BaseService } from "./baseService";
import { CartItemRepository, cartItemRepository } from "../repository/cartItem";

export class CartItemService extends BaseService {
  protected repository: CartItemRepository;

  constructor(repository: CartItemRepository) {
    super(repository);
  }
}

export const cartItemService = new CartItemService(cartItemRepository);
