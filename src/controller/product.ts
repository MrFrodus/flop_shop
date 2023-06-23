import { BaseController } from "./baseController";
import { ProductService, productService } from "../service/product";
import express from "express";
import { ApiError } from "../error/ApiError";
import { IProduct } from "../models/product";

class ProductController extends BaseController<IProduct> {
  protected service: ProductService;

  constructor(service: ProductService) {
    super(service);
  }

  getByIdwithRelation = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const product: IProduct | null = await this.service.getByIdwithRelation(
      parseInt(req.params.id as string)
    );

    if (!product) {
      return next(ApiError.notFound("Such product doesn't"));
    }
    return res.status(200).json(product);
  };
}

export const productController = new ProductController(productService);
