import express from "express";

import { categoryController } from "../controller/category";

const categoryRouter = express.Router();

categoryRouter.get("/:id", categoryController.getById);

categoryRouter.get("/", categoryController.getAll);

categoryRouter.post("/", categoryController.add);

categoryRouter.patch("/:id", categoryController.update);

categoryRouter.delete("/:id", categoryController.remove)

export default categoryRouter;
