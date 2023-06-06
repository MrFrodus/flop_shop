import { BaseService } from "./baseService";
import { OrderItemRepository, orderItemRepository } from "../repository/orderItem";

export class OrderItemService extends BaseService {
  protected repository: OrderItemRepository;

  constructor(repository: OrderItemRepository) {
    super(repository);
  }
}

export const orderItemService = new OrderItemService(orderItemRepository);
