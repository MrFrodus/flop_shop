import express from "express";
import BaseController from "./baseController";
import { ProductService, productService } from "../service/product";
import ApiError from "../error/ApiError";
import { IProduct } from "../models/product";

class ProductController extends BaseController<IProduct> {
  protected service: ProductService;

  getByCategorySlug = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const catsProducts = await this.service.getByCategorySlug(
      req.params.category_slug as string,
      Number(req.query.page as string),
      req.query.filter as string
    );

    if (!catsProducts) {
      return next(ApiError.notFound("Category with such a slug doesn't exist"));
    }

    return res.status(200).json(catsProducts);
  };

  add = async (req: express.Request, res: express.Response) => {
    const product = req.body as IProduct;

    if (req.file) {
      product.image = req.file.path;
    }

    const newProductId: number[] = await this.service.add(product);

    return res.status(200).json(newProductId[0]);
  };

  search = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const searchResults = await this.service.searchByParams(
      req.query.text as string,
      Number(req.query.page as string),
      req.query.filter as string
    );

    if (!searchResults) {
      return next(ApiError.notFound("Page not found"));
    }

    return res.status(200).json(searchResults);
  };
}

const productController = new ProductController(productService);

export default productController;
