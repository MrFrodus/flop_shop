import { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

declare module "jsonwebtoken" {
  export interface JwtPayload {
    user_id: number;
    email: string;
  }
}
