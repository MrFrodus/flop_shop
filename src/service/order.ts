import { BaseService } from "./baseService";
import { OrderRepository, orderRepository } from "../repository/order";

export class OrderService extends BaseService {
  protected repository: OrderRepository;

  constructor(repository: OrderRepository) {
    super(repository);
  }
}

export const orderService = new OrderService(orderRepository);
