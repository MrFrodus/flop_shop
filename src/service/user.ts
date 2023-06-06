import { BaseService } from "./baseService";
import { UserRespository, userRepository } from "../repository/user";

export class UserService extends BaseService {
  protected repository: UserRespository;

  constructor(repository: UserRespository) {
    super(repository);
  }
}

export const userService = new UserService(userRepository);
