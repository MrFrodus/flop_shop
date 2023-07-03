import { IUserLogin } from "./../models/userLogin";
import express from "express";
import { userService } from "../service/user";
import { ApiError } from "../error/ApiError";
import { authService } from "../service/auth";

class AuthController {
  logIn = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const userLogin = req.body as IUserLogin;
    const userData = await userService.getByEmail(userLogin.email);

    if (!userData) {
      return next(ApiError.unauthorized("Wrong email"));
    }
    if (!authService.passwordCheck(req.body.password, userData.password)) {
      return next(ApiError.unauthorized("Wrong password"));
    }

    return res.status(200).json(
      authService.createToken({
        user_id: userData.id,
        email: userData.email,
        admin: userData.admin,
      })
    );
  };

  register = async (req: express.Request, res: express.Response) => {
    const newUserId = await authService.register(req.body);
    return res.status(201).json(newUserId);
  };
}

export const authController = new AuthController();
