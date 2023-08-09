import Joi from "joi";
import express from "express";
import ApiError from "../error/ApiError";

const addOrderItemSchema = Joi.object()
  .keys({
    product_id: Joi.number().required(),
    order_id: Joi.number().required(),
    total_price: Joi.number().required(),
    discount: Joi.number().required(),
    quantity: Joi.number().required(),
    content: Joi.string(),
  })
  .required()
  .min(1);

const addOrderItemValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await addOrderItemSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    console.log(err);

    return next(ApiError.badRequest(err.message));
  }
};

const updateOrderItemSchema = Joi.object()
  .keys({
    product_id: Joi.number(),
    order_id: Joi.number(),
    total_price: Joi.number(),
    discount: Joi.number(),
    quantity: Joi.number(),
    content: Joi.string(),
  })
  .required()
  .min(1);

const updateOrderItemValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await updateOrderItemSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    console.log(err);

    return next(ApiError.badRequest(err.message));
  }
};

export { addOrderItemValidation, updateOrderItemValidation };
