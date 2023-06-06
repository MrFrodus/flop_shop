import { staticData } from "../static/index";
import { IOrderItem } from "../models/orderItem";
import { BaseRepository } from "./baseRepository";

export class OrderItemRepository extends BaseRepository<IOrderItem> {}

export const orderItemRepository = new OrderItemRepository(
  "order_item",
  staticData.db.selectedFields.orderItem.map((value) => {
    return "order_item." + value;
  })
);
