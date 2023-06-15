import express from "express";

import { categoryController } from "../controller/category";

const categoryRouter = express.Router();

categoryRouter.get("/:id(\\d+)/", categoryController.getById);

categoryRouter.get("/", categoryController.getAll);

categoryRouter.post("/", categoryController.add);

categoryRouter.patch("/:id(\\d+)/", categoryController.update);

categoryRouter.delete("/:id(\\d+)/", categoryController.remove);

export default categoryRouter;
