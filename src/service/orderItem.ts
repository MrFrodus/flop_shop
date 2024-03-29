import BaseService from "./baseService";
import {
  OrderItemRepository,
  orderItemRepository,
} from "../repository/orderItem";
import { IOrderItem } from "../models/orderItem";

export class OrderItemService extends BaseService<IOrderItem> {
  protected repository: OrderItemRepository;

  addMany = async (items: []): Promise<number[]> => {
    return this.repository.addMany(items);
  };
}

export const orderItemService = new OrderItemService(orderItemRepository);
