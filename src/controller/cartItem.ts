import express from "express";
import { BaseController } from "./baseController";
import { CartItemService, cartItemService } from "../service/cartItem";
import { ApiError } from "../error/ApiError";
import { ICartItem } from "../models/cartItem";

class CartItemController extends BaseController<ICartItem> {
  protected service: CartItemService;

  constructor(service: CartItemService) {
    super(service);
  }

  getByIdWithRelation = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const cartItem: ICartItem | null = await this.service.getByIdWithRelation(
      parseInt(req.params.id as string)
    );

    if (!cartItem) {
      return next(ApiError.notFound("Such cart-item doesn't exist"));
    }

    return res.status(200).json(cartItem);
  };

  getByCartId = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const cartItems: ICartItem[] = await this.service.getByCartId(
      parseInt(req.params.id as string)
    );

    return res.status(200).json(cartItems);
  };

  deleteByCartId = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const numDeletedItems = await this.service.deleteByCartId(
      parseInt(req.params.id as string)
    );

    if (numDeletedItems === 0) {
      return next(ApiError.notFound("Such cart doesn't exist"));
    }

    return res.status(200).json(numDeletedItems);
  };

  getMany = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const cartItems = await this.service.getMany(req.body.ids);

    return res.status(200).json(cartItems);
  };
}

export const cartItemController = new CartItemController(cartItemService);
