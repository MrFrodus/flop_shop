import { BaseController } from "./baseController";
import { CategoryService, categoryService } from "../service/category";


class CategoryController extends BaseController {
  protected service: CategoryService;

  constructor(service: CategoryService) {
    super(service);
  }
}

export const categoryController = new CategoryController(categoryService);
