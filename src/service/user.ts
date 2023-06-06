import { BaseService } from "./baseService";
import { UserRepository, userRepository } from "../repository/user";

export class UserService extends BaseService {
  protected repository: UserRepository;

  constructor(repository: UserRepository) {
    super(repository);
  }
}

export const userService = new UserService(userRepository);
