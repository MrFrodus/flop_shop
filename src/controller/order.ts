import express from "express";
import { ITransaction } from "src/models/transaction";
import BaseController from "./baseController";
import { OrderService, orderService } from "../service/order";
import { IOrder } from "../models/order";
import ApiError from "../error/ApiError";
import { IShipping } from "../models/shipping";

class OrderController extends BaseController<IOrder> {
  protected service: OrderService;

  addWithRelations = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const newOrderId = await this.service.addWithRelations(
      req.body as {
        cart_items_ids: number[];
        order: IOrder;
        shipping: IShipping;
        transaction: ITransaction;
      }
    );

    if (!newOrderId) {
      next(ApiError.badRequest("No products given for buying"));
    }

    return res.status(201).json(newOrderId);
  };
}

const orderController = new OrderController(orderService);

export default orderController;
