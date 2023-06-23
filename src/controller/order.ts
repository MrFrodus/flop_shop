import { BaseController } from "./baseController";
import { OrderService, orderService } from "../service/order";
import { IOrder } from "../models/order";
import express from "express";
import { ApiError } from "../error/ApiError";

class OrderController extends BaseController<IOrder> {
  protected service: OrderService;

  constructor(service: OrderService) {
    super(service);
  }

  createNewOrder = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const newOrderId = await this.service.createNewOrder(
      req.body.cart_items_ids as number[],
      req.body.new_order as IOrder
    );

    return res.status(201).json(newOrderId);
  };
}

export const orderController = new OrderController(orderService);
