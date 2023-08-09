import BaseController from "./baseController";
import { CategoryService, categoryService } from "../service/category";
import { ICategory } from "../models/category";

class CategoryController extends BaseController<ICategory> {
  protected service: CategoryService;
}

const categoryController = new CategoryController(categoryService);

export default categoryController;
