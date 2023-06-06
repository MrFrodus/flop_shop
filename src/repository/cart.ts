import { staticData } from "../static/index";
import { ICart } from "../models/cart";
import { BaseRepository } from "./baseRepository";

export class CartRepository extends BaseRepository<ICart> {}

export const cartRepository = new CartRepository(
  "cart",
  staticData.db.selectedFields.cart.map((value) => {
    return "cart." + value;
  })
);
