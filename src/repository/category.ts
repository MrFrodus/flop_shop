import staticData from "../static/index";
import { ICategory } from "../models/category";
import BaseRepository from "./baseRepository";

export class CategoryRepository extends BaseRepository<ICategory> {}

export const categoryRepository = new CategoryRepository(
  "category",
  staticData.db.selectedFields.category.map((value) => {
    return `category.${value}`;
  })
);
