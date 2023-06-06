import { BaseController } from "./baseController";
import { UserService, userService } from "../service/user";


class UserController extends BaseController {
  protected service: UserService;

  constructor(service: UserService) {
    super(service);
  }
}

export const userController = new UserController(userService);
