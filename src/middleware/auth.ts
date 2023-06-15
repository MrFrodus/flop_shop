import jwt, { JwtPayload } from "jsonwebtoken";
import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { ApiError } from "../error/ApiError";

let sec = process.env.ACCESS_TOKEN_SECRET as string;

const authenticateToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];
    
    if (!token) {
      return next(ApiError.notAllowed("Invalid token"));
    }

    const decoded = jwt.verify(token, sec) as JwtPayload;
    req.user = decoded;
    next();
  } catch (err) {
    return next(ApiError.notAllowed("Please authenticate"));
  }
};

export { authenticateToken };
