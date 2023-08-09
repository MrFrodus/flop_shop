import Joi from "joi";
import express from "express";
import ApiError from "../error/ApiError";

const addUserSchema = Joi.object()
  .keys({
    first_name: Joi.string(),
    last_name: Joi.string(),
    middle_name: Joi.string(),
    mobile: Joi.string(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
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

    return next(ApiError.badRequest(err.message));
  }
};

const updateUserSchema = Joi.object()
  .keys({
    first_name: Joi.string(),
    last_name: Joi.string(),
    middle_name: Joi.string(),
    mobile: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string(),
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

    return next(ApiError.badRequest(err.message));
  }
};

export { addUserValidation, updateUserValidation };
