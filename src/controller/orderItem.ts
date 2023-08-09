import BaseController from "./baseController";
import { OrderItemService, orderItemService } from "../service/orderItem";
import { IOrderItem } from "../models/orderItem";

class OrderItemController extends BaseController<IOrderItem> {
  protected service: OrderItemService;
}

const orderItemController = new OrderItemController(orderItemService);

export default orderItemController;
