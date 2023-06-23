import { staticData } from "../static/index";
import { IOrderItem } from "../models/orderItem";
import { BaseRepository } from "./baseRepository";
import db from "../db/db";

export class OrderItemRepository extends BaseRepository<IOrderItem> {
  addMany(items: IOrderItem[]): Promise<number[]> {
    return db(this.table).insert(items);
  }
}

export const orderItemRepository = new OrderItemRepository(
  "order_item",
  staticData.db.selectedFields.orderItem.map((value) => {
    return "order_item." + value;
  })
);
