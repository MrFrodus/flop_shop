import Joi from "joi";
import { ApiError } from "../error/ApiError";
import express from "express";

const addUserSchema = Joi.object()
  .keys({
    first_name: Joi.string(),
    last_name: Joi.string(),
    middle_name: Joi.string(),
    mobile: Joi.string(),
    email: Joi.string().email().required(),
    password_hash: Joi.string().required(),
    admin: Joi.number().required(),
    vendor: Joi.number().required(),
    intro: Joi.string(),
    address: Joi.string(),
    city: Joi.string(),
    region: Joi.string(),
    country: Joi.string(),
    profile: Joi.string(),
  })
  .required()
  .min(1);

async function addUserValidation(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    await addUserSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
}

const updateUserSchema = Joi.object()
  .keys({
    first_name: Joi.string(),
    last_name: Joi.string(),
    middle_name: Joi.string(),
    mobile: Joi.string(),
    email: Joi.string().email(),
    password_hash: Joi.string(),
    admin: Joi.number(),
    vendor: Joi.number(),
    intro: Joi.string(),
    address: Joi.string(),
    city: Joi.string(),
    region: Joi.string(),
    country: Joi.string(),
    profile: Joi.string(),
  })
  .required()
  .min(1);

async function updateUserValidation(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    await updateUserSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
}

export { addUserValidation, updateUserValidation };
