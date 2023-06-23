import express from "express";

import { transactionController } from "../controller/transaction";

const transactionRouter = express.Router();

transactionRouter.get("/:id(\\d+)/", transactionController.getById);

transactionRouter.get("/", transactionController.getAll);

transactionRouter.post("/", transactionController.add);

transactionRouter.patch("/:id(\\d+)/", transactionController.update);

transactionRouter.delete("/:id(\\d+)/", transactionController.delete);

export default transactionRouter;
