import express from "express";

import { authController } from "../controller/auth";

const authRouter = express.Router();

authRouter.post("/", authController.logIn);

export default authRouter;
