import { staticData } from "../static/index";
import { ICartItem } from "../models/cartItem";
import { BaseRepository } from "./baseRepository";

export class CartItemRepository extends BaseRepository<ICartItem> {}

export const cartItemRepository = new CartItemRepository(
  "cart_item",
  staticData.db.selectedFields.cartItem.map((value) => {
    return "cart_item." + value;
  })
);
