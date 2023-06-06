import express from "express";

import { transactionController } from "../controller/transaction";

const transactionRouter = express.Router();

transactionRouter.get("/:id", transactionController.getById);

transactionRouter.get("/", transactionController.getAll);

transactionRouter.post("/", transactionController.add);

transactionRouter.patch("/:id", transactionController.update);

transactionRouter.delete("/:id", transactionController.remove)

export default transactionRouter;
