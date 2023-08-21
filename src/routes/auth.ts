import express from "express";
import authController from "../controller/auth";
import { registrationValidation, logInValidation } from "../middleware/auth";

const authRouter = express.Router();

authRouter.post("/login", logInValidation, authController.logIn);

authRouter.post("/reg", registrationValidation, authController.register);

authRouter.post("/token", authController.getUserByToken);

export default authRouter;
