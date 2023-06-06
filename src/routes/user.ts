import express from "express";
import { addUserValidation, updateUserValidation } from "../middleware/user";

import { userController } from "../controller/user";

const userRouter = express.Router();

userRouter.get("/:id", userController.getById);

userRouter.get("/", userController.getAll);

userRouter.post("/", addUserValidation, userController.add);

userRouter.patch("/:id", updateUserValidation, userController.update);

userRouter.delete("/:id", userController.remove)

export default userRouter;
