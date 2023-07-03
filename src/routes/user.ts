import express from "express";
import { addUserValidation, updateUserValidation } from "../middleware/user";

import { userController } from "../controller/user";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)/", userController.getById);

userRouter.get("/", userController.getAll);

userRouter.post("/", addUserValidation, userController.add);

userRouter.patch("/:id(\\d+)/", updateUserValidation, userController.update);

userRouter.delete("/:id(\\d+)/", userController.delete);

userRouter.post("/email", userController.getByEmail);

userRouter.get("/me", userController.me);

export default userRouter;
