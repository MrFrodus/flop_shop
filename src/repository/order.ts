import staticData from "../static/index";
import { IOrder } from "../models/order";
import BaseRepository from "./baseRepository";

export class OrderRepository extends BaseRepository<IOrder> {}

export const orderRepository = new OrderRepository(
  "order",
  staticData.db.selectedFields.order.map((value) => {
    return `order.${value}`;
  })
);
