import staticData from "../static/index";
import { IProduct } from "../models/product";
import BaseRepository from "./baseRepository";
import db from "../db/db";

export class ProductRepository extends BaseRepository<IProduct> {
  getByIdWIthRating = (id: number): Promise<IProduct[] | unknown> => {
    return db(this.table)
      .select(...this.selectedColumns)
      .avg("product_review.rating as rating_average")
      .from("product")
      .leftJoin(
        "product_review",
        "product_review.product_id",
        "=",
        "product.id"
      )
      .where("product.id", "=", id);
  };

  getByCategoryId = (
    category_id: number,
    page: number,
    filter: string
  ): Promise<IProduct[] | string[]> => {
    const products = db<IProduct>(this.table)
      .select(...this.selectedColumns)
      .avg("product_review.rating as rating_avg")
      .from("product")
      .leftJoin(
        "product_review",
        "product_review.product_id",
        "=",
        "product.id"
      )
      .where("product.category_id", "=", category_id)
      .groupBy("product.id");

    if (filter === "date") {
      products.orderBy("product.created_at", "desc");
    } else if (filter === "title") {
      products.orderBy("product.title", "desc");
    } else if (filter === "rating") {
      products.orderBy("rating_avg", "desc");
    } else if (filter === "price") {
      products.orderBy("product.price", "desc");
    }

    if (page) {
      const limit = 6;
      const offset = (page - 1) * limit;

      return products.offset(offset).limit(6);
    }

    return products;
  };

  countByCategoryId = (category_id: number) => {
    return db(this.table).count("* as count").where({ category_id });
  };

  getAll = (): Promise<unknown[]> => {
    return db(this.table)
      .select(...this.selectedColumns)
      .avg("product_review.rating as rating_avg")
      .from("product")
      .leftJoin(
        "product_review",
        "product_review.product_id",
        "=",
        "product.id"
      )
      .groupBy("product.id");
  };

  search = (searchParams: string, page: number, filter: string) => {
    const products = db(this.table)
      .select(...this.selectedColumns)
      .avg("product_review.rating as rating_avg")
      .from("product")
      .leftJoin(
        "product_review",
        "product_review.product_id",
        "=",
        "product.id"
      )
      .where("product.title", "like", `%${searchParams}%`)
      .groupBy("product.id");

    if (filter === "date") {
      products.orderBy("product.created_at", "desc");
    } else if (filter === "title") {
      products.orderBy("product.title", "desc");
    } else if (filter === "rating") {
      products.orderBy("rating_avg", "desc");
    } else if (filter === "price") {
      products.orderBy("product.price", "desc");
    }

    if (page) {
      const limit = 6;
      const offset = (page - 1) * limit;

      return products.offset(offset).limit(6);
    }

    return products;
  };

  countBySearch = (searchParams: string) => {
    return db(this.table)
      .count("* as count")
      .where("product.title", "like", `%${searchParams}%`);
  };
}

export const productRepository = new ProductRepository(
  "product",
  staticData.db.selectedFields.product.map((value) => {
    return `product.${value}`;
  })
);
