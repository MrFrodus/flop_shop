import { BaseController } from "./baseController";
import { ProductService, productService } from "../service/product";
import express from "express";
import { BaseModel } from "../models/baseModel";
import { ApiError } from "../error/ApiError";

class ProductController extends BaseController {
  protected service: ProductService;

  constructor(service: ProductService) {
    super(service);
  }

  getByIdwithRelation = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const item: BaseModel | null = await this.service.getByIdwithRelation(
      req.params.id as string
    );

    if (!item) {
      return next(ApiError.notFound("Such item doesn't exist"));
    }
    return res.status(200).json(item);
  };
}

export const productController = new ProductController(productService);
