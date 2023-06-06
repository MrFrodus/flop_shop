import { BaseService } from "./baseService";
import { CategoryRepository, categoryRepository } from "../repository/category";

export class CategoryService extends BaseService {
  protected repository: CategoryRepository;

  constructor(repository: CategoryRepository) {
    super(repository);
  }
}

export const categoryService = new CategoryService(categoryRepository);
