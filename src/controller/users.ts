import { BaseController } from "./baseController";
import { UsersService, usersService } from "../service/users";


class UsersController extends BaseController {
  protected service: UsersService;

  constructor(service: UsersService) {
    super(service);
  }
}

export const usersController = new UsersController(usersService);
