import express from "express";
import BaseController from "./baseController";
import { UserService, userService } from "../service/user";
import { IUser } from "../models/user";
import ApiError from "../error/ApiError";

class UserController extends BaseController<IUser> {
  protected service: UserService;

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

  me = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const user: IUser | null = await this.service.getById(req.user.user_id);
    if (!user) {
      return next(ApiError.notFound("Such user doesn't exist"));
    }

    return res.status(200).json(user);
  };
}

const userController = new UserController(userService);

export default userController;
