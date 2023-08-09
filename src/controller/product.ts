import express from "express";
import BaseController from "./baseController";
import { ProductService, productService } from "../service/product";
import ApiError from "../error/ApiError";
import { IProduct } from "../models/product";

class ProductController extends BaseController<IProduct> {
  protected service: ProductService;

  getByIdwithRelation = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const product: IProduct | null = await this.service.getByIdwithRelation(
      Number(req.params.id as string)
    );

    if (!product) {
      return next(ApiError.notFound("Such product doesn't"));
    }

    return res.status(200).json(product);
  };

  add = async (req: express.Request, res: express.Response) => {
    const product = req.body as IProduct;

    if (req.file) {
      product.image = req.file.path;
    }

    const newProductId: number[] = await this.service.add(product);

    return res.status(200).json(newProductId[0]);
  };
}

const productController = new ProductController(productService);

export default productController;
