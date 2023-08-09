import BaseService from "./baseService";
import { CartItemRepository, cartItemRepository } from "../repository/cartItem";
import { productRepository } from "../repository/product";
import { ICartItem } from "../models/cartItem";

export class CartItemService extends BaseService<ICartItem> {
  protected repository: CartItemRepository;

  getByIdWithRelation = async (id: number): Promise<ICartItem | null> => {
    const [cartItem] = await this.repository.getById(id);
    if (!cartItem) {
      return null;
    }

    const [product] = await productRepository.getById(cartItem.product_id);

    if (product) {
      cartItem.product = product;
    } else {
      cartItem.product = null;
    }

    return cartItem;
  };

  getByCartId = async (cart_id: number): Promise<ICartItem[]> => {
    return this.repository.getByCartId(cart_id);
  };

  deleteByCartId = async (cart_id: number): Promise<number> => {
    return this.repository.deleteByCartId(cart_id);
  };

  getMany = async (ids: number[]): Promise<ICartItem[]> => {
    return this.repository.getMany(ids);
  };

  deleteMany = async (ids: number[]): Promise<number> => {
    return this.repository.deleteMany(ids);
  };
}

export const cartItemService = new CartItemService(cartItemRepository);
