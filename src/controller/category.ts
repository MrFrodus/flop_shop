import express from "express";
import BaseController from "./baseController";
import { CategoryService, categoryService } from "../service/category";
import { ICategory } from "../models/category";

class CategoryController extends BaseController<ICategory> {
  protected service: CategoryService;

  getMainCats = async (req: express.Request, res: express.Response) => {
    const categories: ICategory[] = await this.service.getMainCats();

    return res.status(200).json(categories);
  };

  getByParentId = async (req: express.Request, res: express.Response) => {
    const categories: ICategory[] = await this.service.getByParentId(
      Number(req.params.id as string)
    );

    return res.status(200).json(categories);
  };
}

const categoryController = new CategoryController(categoryService);

export default categoryController;
