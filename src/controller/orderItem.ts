import { BaseController } from "./baseController";
import { OrderItemService, orderItemService } from "../service/orderItem";


class OrderItemController extends BaseController {
  protected service: OrderItemService;

  constructor(service: OrderItemService) {
    super(service);
  }
}

export const orderItemController = new OrderItemController(orderItemService);
