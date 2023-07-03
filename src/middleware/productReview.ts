import Joi from "joi";
import { ApiError } from "../error/ApiError";
import express from "express";

const addUserSchema = Joi.object()
  .keys({
    product_id: Joi.number().required(),
    parent_id: Joi.number(),
    title: Joi.string().required(),
    rating: Joi.number().required(),
    content: Joi.string(),
    published: Joi.number().required(),
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
    parent_id: Joi.number(),
    title: Joi.string(),
    rating: Joi.number(),
    content: Joi.string(),
    published: Joi.number(),
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
