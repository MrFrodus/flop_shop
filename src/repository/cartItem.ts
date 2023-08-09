import staticData from "../static/index";
import { ICartItem } from "../models/cartItem";
import BaseRepository from "./baseRepository";
import db from "../db/db";

export class CartItemRepository extends BaseRepository<ICartItem> {
  getByCartId(cart_id: number): Promise<ICartItem[]> {
    const cartFields = this.selectedColumns;
    const productFields = staticData.db.selectedFields.product.map(
      (productField) => {
        return `product.${productField} as product_${productField}`;
      }
    );

    return db("cart_item")
      .select(...cartFields, ...productFields)
      .leftJoin("product", "cart_item.product_id", "=", "product.id")
      .where({ cart_id });
  }

  getMany(ids: number[]): Promise<ICartItem[]> {
    const cartFields = this.selectedColumns;
    const productFields = staticData.db.selectedFields.product.map(
      (productField) => {
        return `product.${productField} as product_${productField}`;
      }
    );

    return db("cart_item")
      .select(...cartFields, ...productFields)
      .leftJoin("product", "cart_item.product_id", "=", "product.id")
      .whereIn("cart_item.id", ids);
  }

  deleteByCartId(cart_id: number): Promise<number> {
    return db(this.table).where({ cart_id }).del();
  }

  // getMany(ids: []): Promise<ICartItem[]> {
  //   return db(this.table).whereIn("id", ids);
  // }

  deleteMany(ids: number[]): Promise<number> {
    return db(this.table).whereIn("id", ids).del();
  }
}

export const cartItemRepository = new CartItemRepository(
  "cart_item",
  staticData.db.selectedFields.cartItem.map((value) => {
    return `cart_item.${value}`;
  })
);
