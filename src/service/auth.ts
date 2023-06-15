import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";

dotenv.config();

let sec = process.env.ACCESS_TOKEN_SECRET as string;

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


}

export const authService = new AuthService();
