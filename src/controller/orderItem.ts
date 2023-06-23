import { BaseController } from "./baseController";
import { OrderItemService, orderItemService } from "../service/orderItem";
import { IOrderItem } from "../models/orderItem";


class OrderItemController extends BaseController<IOrderItem> {
  protected service: OrderItemService;

  constructor(service: OrderItemService) {
    super(service);
  }
}

export const orderItemController = new OrderItemController(orderItemService);
