import { BaseController } from "./baseController";
import { OrderService, orderService } from "../service/order";


class OrderController extends BaseController {
  protected service: OrderService;

  constructor(service: OrderService) {
    super(service);
  }
}

export const orderController = new OrderController(orderService);
