import jwt, { JwtPayload } from "jsonwebtoken";
import express from "express";
import Joi from "joi";

import * as dotenv from "dotenv";
dotenv.config();
import { ApiError } from "../error/ApiError";

let sec = process.env.ACCESS_TOKEN_SECRET as string;

const registrationSchema = Joi.object()
  .keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    admin: Joi.number().required(),
    vendor: Joi.number().required(),
  })
  .required()
  .min(1);

const registrationValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await registrationSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};
const logInSchema = Joi.object()
  .keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
  .required()
  .min(1);

const logInValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await logInSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};

const authenticateToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return next(ApiError.unauthorized("Invalid token"));
    }

    const decoded = jwt.verify(token, sec) as JwtPayload;
    req.user = decoded;
    next();
  } catch (err) {
    return next(ApiError.unauthorized("Please authenticate"));
  }
};

const adminCheck = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (!req.user.admin) {
    next(ApiError.forbidden("Not allowed"));
  }

  next();
};

export {
  authenticateToken,
  adminCheck,
  registrationValidation,
  logInValidation,
};
