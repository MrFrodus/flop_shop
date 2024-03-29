import express from "express";
import categoryController from "../controller/category";
import {
  addCategoryValidation,
  updateCategoryValidation,
} from "../middleware/category";

const categoryRouter = express.Router();

categoryRouter.get("/:id(\\d+)/", categoryController.getById);

categoryRouter.get("/", categoryController.getAll);

categoryRouter.post("/", addCategoryValidation, categoryController.add);

categoryRouter.patch(
  "/:id(\\d+)/",
  updateCategoryValidation,
  categoryController.update
);

categoryRouter.delete("/:id(\\d+)/", categoryController.delete);

categoryRouter.get("/main", categoryController.getMainCats);

categoryRouter.get("/parent/:id(\\d+)/", categoryController.getByParentId);

export default categoryRouter;
