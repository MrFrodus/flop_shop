import { BaseController } from "./baseController";
import { UserService, userService } from "../service/user";
import express from "express";
import { IUser } from "../models/user";
import { ApiError } from "../error/ApiError";


class UserController extends BaseController {
  protected service: UserService;

  constructor(service: UserService) {
    super(service);
  }

  getByEmail = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const user: IUser | null = await this.service.getByEmail(
      req.body.email as string
    );

    if (!user) {
      return next(ApiError.notFound("Such user doesn't exist"));
    }
    return res.status(200).json(user);
  };
}

export const userController = new UserController(userService);
