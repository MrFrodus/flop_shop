import Joi from "joi";
import { ApiError } from "../error/ApiError";
import express from "express";

const addShippingSchema = Joi.object()
  .keys({
    order_id: Joi.number().required(),
    user_id: Joi.number().required(),
    region: Joi.string(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    address: Joi.string(),
    price: Joi.number().required(),
    method: Joi.string().required(),
  })
  .required()
  .min(1);

const addShippingValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await addShippingSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};

const updateShippingSchema = Joi.object()
  .keys({
    order_id: Joi.number(),
    user_id: Joi.number(),
    region: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
    address: Joi.string(),
    price: Joi.number(),
    method: Joi.string(),
  })
  .required()
  .min(1);

const updateShippingValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await updateShippingSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};

export { addShippingValidation, updateShippingValidation };
