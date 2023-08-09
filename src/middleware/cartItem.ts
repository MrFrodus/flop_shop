import Joi from "joi";
import express from "express";
import ApiError from "../error/ApiError";

const addCartItemSchema = Joi.object()
  .keys({
    product_id: Joi.number().required(),
    cart_id: Joi.number().required(),
    quantity: Joi.number().required(),
    content: Joi.string(),
  })
  .required()
  .min(1);

const addCartItemValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await addCartItemSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    console.log(err);

    return next(ApiError.badRequest(err.message));
  }
};

const updateCartItemSchema = Joi.object()
  .keys({
    product_id: Joi.number(),
    cart_id: Joi.number(),
    quantity: Joi.number(),
    content: Joi.string(),
  })
  .required()
  .min(1);

const updateCartItemValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await updateCartItemSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    console.log(err);

    return next(ApiError.badRequest(err.message));
  }
};

export { addCartItemValidation, updateCartItemValidation };
