import express from "express";
import { IUserLogin } from "../models/userLogin";
import { userService } from "../service/user";
import ApiError from "../error/ApiError";
import { AuthService, authService } from "../service/auth";

class AuthController {
  protected service: AuthService;

  constructor(service: AuthService) {
    this.service = service;
  }

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
    if (!this.service.passwordCheck(req.body.password, userData.password)) {
      return next(ApiError.unauthorized("Wrong password"));
    }

    return res.status(200).json(
      this.service.createToken({
        user_id: userData.id,
        email: userData.email,
        admin: userData.admin,
      })
    );
  };

  register = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const newUserId: number = await this.service.register(req.body);

      return res.status(201).json(newUserId);
    } catch (error) {
      return next(error);
    }
  };
}

const authController = new AuthController(authService);

export default authController;
