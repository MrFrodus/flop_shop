import Joi from "joi";
import { ApiError } from "../error/ApiError";
import express from "express";

const addUserSchema = Joi.object()
  .keys({
    product_id: Joi.number().required(),
    key: Joi.string().required(),
    content: Joi.string(),
  })
  .required()
  .min(1);

const addUserValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await addUserSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};

const updateUserSchema = Joi.object()
  .keys({
    product_id: Joi.number(),
    key: Joi.string(),
    content: Joi.string(),
  })
  .required()
  .min(1);

const updateUserValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await updateUserSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};

export { addUserValidation, updateUserValidation };
