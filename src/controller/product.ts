import express from "express";
// import * as redis from "redis";
import BaseController from "./baseController";
import { ProductService, productService } from "../service/product";
import ApiError from "../error/ApiError";
import { IProduct } from "../models/product";

// const redisClient = redis.createClient();

// const connectRedis = async () => {
//   await redisClient.connect();
//   console.log("Redis connected");
// };

// connectRedis();

// const DEFAULT_EXPIRATION = 3600;

// const cacheData = async (key: string, value: () => Promise<unknown>) => {
//   const data = await redisClient.get(key).catch((error) => {
//     return error;
//   });

//   if (data != null) {
//     console.log("Already cashed 🟢");

//     return JSON.parse(data);
//   }

//   console.log("Not cashed 🔴 ");

//   try {
//     const freshData = await value();

//     if (!freshData || (Array.isArray(freshData) && value.length === 0)) {
//       console.log("Not valid value for cashing 🔴");

//       return freshData;
//     }

//     redisClient.setEx(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));
//     console.log("Cashed successfully 🟢");

//     return freshData;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

class ProductController extends BaseController<IProduct> {
  protected service: ProductService;

  getByCategorySlug = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // const catsProducts = await cacheData(
    //   `product/category/${req.params.category_slug}?page=${
    //     req.query.page as string
    //   }&filter=${req.query.filter as string}`,
    //   async () => {
    //     const products = await this.service.getByCategorySlug(
    //       req.params.category_slug as string,
    //       Number(req.query.page as string),
    //       req.query.filter as string
    //     );

    //     return products;
    //   }
    // );

    const catsProducts = await this.service.getByCategorySlug(
      req.params.category_slug as string,
      Number(req.query.page as string),
      req.query.filter as string
    );
    if (!catsProducts) {
      return next(ApiError.notFound("Category with such a slug doesn't exist"));
    }

    if (Array.isArray(catsProducts) && catsProducts.length === 0) {
      return next(ApiError.notFound("Invalid page"));
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

    if (Array.isArray(searchResults) && searchResults.length === 0) {
      return next(ApiError.notFound("Invalid page"));
    }

    return res.status(200).json(searchResults);
  };
}

const productController = new ProductController(productService);

export default productController;
