import BaseService from "./baseService";
import { CategoryRepository, categoryRepository } from "../repository/category";
import { ICategory } from "../models/category";

export class CategoryService extends BaseService<ICategory> {
  protected repository: CategoryRepository;
}

export const categoryService = new CategoryService(categoryRepository);
