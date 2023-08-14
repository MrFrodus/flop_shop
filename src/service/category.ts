import BaseService from "./baseService";
import { CategoryRepository, categoryRepository } from "../repository/category";
import { ICategory } from "../models/category";

export class CategoryService extends BaseService<ICategory> {
  protected repository: CategoryRepository;

  getMainCats = async (): Promise<ICategory[]> => {
    return this.repository.getMainCats();
  };

  getByParentId = async (parent_id: number): Promise<ICategory[]> => {
    return this.repository.getByParentId(parent_id);
  };

  getAll = async (): Promise<ICategory[]> => {
    const mainCats = await this.getMainCats();
    const allCats = await this.repository.getAll();

    mainCats.forEach((cat) => {
      cat.sub_categories = allCats.filter((value: ICategory) => {
        return cat.id === value.parent_id;
      });
    });

    return mainCats;
  };
}

export const categoryService = new CategoryService(categoryRepository);
