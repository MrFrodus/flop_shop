import express from "express";
import { addUserValidation, updateUserValidation } from "../middleware/user";
import { authenticateToken } from "../middleware/auth";

import { userController } from "../controller/user";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)/", userController.getById);

userRouter.get("/", userController.getAll);

userRouter.post("/", addUserValidation, userController.add);

userRouter.patch("/:id(\\d+)/", updateUserValidation, userController.update);

userRouter.delete("/:id(\\d+)/", userController.delete);

userRouter.post("/email", authenticateToken, userController.getByEmail);

userRouter.post("/reg", userController.register);

userRouter.get("/me", authenticateToken, userController.me);

export default userRouter;
