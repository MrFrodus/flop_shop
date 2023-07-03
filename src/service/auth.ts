import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { IUser } from "../models/user";
import { userService } from "./user";
import { cartService } from "./cart";

dotenv.config();

const sec = process.env.ACCESS_TOKEN_SECRET as string;

class AuthService {
  createToken = (data: object): string => {
    const token = jwt.sign(data, sec);
    console.log(token);
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
    const { password } = user;
    const hashedPassword = await authService.hashPassword(password);
    user.password = hashedPassword;
    const [newUserId] = await userService.add(user);
    await cartService.add({ user_id: newUserId})
    return newUserId!;
  };
}

export const authService = new AuthService();
