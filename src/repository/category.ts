import staticData from "../static/index";
import { ICategory } from "../models/category";
import BaseRepository from "./baseRepository";
import db from "../db/db";

export class CategoryRepository extends BaseRepository<ICategory> {
  getMainCats(): Promise<ICategory[]> {
    return db(this.table)
      .select(...this.selectedColumns)
      .where({ parent_id: null });
  }

  getByParentId(parent_id: number): Promise<ICategory[]> {
    return db(this.table)
      .select(...this.selectedColumns)
      .where({ parent_id });
  }
}

export const categoryRepository = new CategoryRepository(
  "category",
  staticData.db.selectedFields.category.map((value) => {
    return `category.${value}`;
  })
);
