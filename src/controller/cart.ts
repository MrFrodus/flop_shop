import express from "express";
import { BaseController } from "./baseController";
import { CartService, cartService } from "../service/cart";
import { ICart } from "../models/cart";
import { ApiError } from "../error/ApiError";

class CartController extends BaseController<ICart> {
  protected service: CartService;

  constructor(service: CartService) {
    super(service);
  }

  getWithCartItems = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const cart = await this.service.getWithCartItems(
      parseInt(req.params.id as string)
    );
    if (!cart) {
      return next(ApiError.notFound("Such cart doesn't exist"));
    }

    res.status(200).json(cart);
  };
}

export const cartController = new CartController(cartService);
