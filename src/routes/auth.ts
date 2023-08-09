import express from "express";
import authController from "../controller/auth";
import { registrationValidation, logInValidation } from "../middleware/auth";

const authRouter = express.Router();

authRouter.post("/", logInValidation, authController.logIn);

authRouter.post("/reg", registrationValidation, authController.register);

export default authRouter;
