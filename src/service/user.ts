import { IUser } from "../models/user";
import BaseService from "./baseService";
import { UserRepository, userRepository } from "../repository/user";

export class UserService extends BaseService<IUser> {
  protected repository: UserRepository;

  getByEmail = async (email: string): Promise<IUser | null> => {
    const [user] = await this.repository.getByEmail(email);
    if (!user) {
      return null;
    }

    return user;
  };
}

export const userService = new UserService(userRepository);
