import Joi from "joi";
import express from "express";
import ApiError from "../error/ApiError";

const addCartSchema = Joi.object()
  .keys({
    user_id: Joi.string().required(),
    content: Joi.string(),
  })
  .required()
  .min(1);

const addCartValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await addCartSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    console.log(err);

    return next(ApiError.badRequest(err.message));
  }
};

const updateCartSchema = Joi.object()
  .keys({
    user_id: Joi.string().required(),
    content: Joi.string(),
  })
  .required()
  .min(1);

const updateCartValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await updateCartSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    console.log(err);

    return next(ApiError.badRequest(err.message));
  }
};

export { addCartValidation, updateCartValidation };
