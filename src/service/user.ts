import { IUser } from "../models/user";
import { BaseService } from "./baseService";
import { UserRepository, userRepository } from "../repository/user";
import { authService } from "./auth";

export class UserService extends BaseService<IUser> {
  protected repository: UserRepository;

  constructor(repository: UserRepository) {
    super(repository);
  }

  getByEmail = async (email: string): Promise<IUser | null> => {
    const [user] = await this.repository.getByEmail(email);
    if (!user) {
      return null;
    } else {
      return user;
    }
  };

  register = async (user: IUser) => {
    const { password } = user;
    const hashedPassword = await authService.hashPassword(password);
    user.password = hashedPassword;
    return userRepository.add(user);
  };
}

export const userService = new UserService(userRepository);
