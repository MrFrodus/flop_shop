import Joi from "joi";
import { ApiError } from "../error/ApiError";
import express from "express";

const addTransactionSchema = Joi.object()
  .keys({
    order_id: Joi.number().required(),
    code: Joi.string().required(),
    type: Joi.string().required(),
    mode: Joi.string().required(),
    status: Joi.string().required(),
  })
  .required()
  .min(1);

const addTransactionValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await addTransactionSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};

const updateTransactionSchema = Joi.object()
  .keys({
    order_id: Joi.number(),
    code: Joi.string(),
    type: Joi.string(),
    mode: Joi.string(),
    status: Joi.string(),
  })
  .required()
  .min(1);

const updateTransactionValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await updateTransactionSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};

export { addTransactionValidation, updateTransactionValidation };
