import { BaseService } from "./baseService";
import { UsersRespository, usersRepository } from "../repository/users";

export class UsersService extends BaseService {
  protected repository: UsersRespository;

  constructor(repository: UsersRespository) {
    super(repository);
  }
}

export const usersService = new UsersService(usersRepository);
