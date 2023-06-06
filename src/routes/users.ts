import express from "express";
import { addUserValidation, updateUserValidation } from "../middleware/users";

import { usersController } from "../controller/users";

const usersRouter = express.Router();

usersRouter.get("/:id", usersController.getById);

usersRouter.get("/", usersController.getAll);

usersRouter.post("/", addUserValidation, usersController.add);

usersRouter.patch("/:id", updateUserValidation, usersController.update);

usersRouter.delete("/:id", usersController.remove)

export default usersRouter;
