import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { IUser } from "../models/user";
import { userService } from "./user";
import { cartService } from "./cart";
import { userRepository } from "../repository/user";
import ApiError from "../error/ApiError";

dotenv.config();

const sec = process.env.ACCESS_TOKEN_SECRET as string;

export class AuthService {
  createToken = (data: object): string => {
    const token = jwt.sign(data, sec);

    return token;
  };

  passwordCheck = (loginPassword: string, hashedPassword: string): boolean => {
    return bcrypt.compareSync(loginPassword, hashedPassword);
  };

  hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  };

  register = async (user: IUser): Promise<number> => {
    const [userByEmailOrMobile] = await userRepository.getByMobileOrEmail(
      user.email,
      user.mobile
    );

    if (userByEmailOrMobile) {
      const errorField =
        user.email === userByEmailOrMobile.email
          ? "an email"
          : "a mobile number";
      const errorMessage = `User with such ${errorField} already exists`;

      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw ApiError.conflict(errorMessage);
    }

    const { password } = user;
    const hashedPassword = await this.hashPassword(password);
    user.password = hashedPassword;
    const [newUserId] = await userService.add(user);
    await cartService.add({ user_id: newUserId });

    return newUserId!;
  };
}

export const authService = new AuthService();
