import Joi from "joi";
import { ApiError } from "../error/ApiError";
import express from "express";

const addCategorySchema = Joi.object()
  .keys({
    parent_id: Joi.number(),
    title: Joi.string().required(),
    meta_title: Joi.string(),
    slug: Joi.string().required(),
    content: Joi.string()
  })
  .required()
  .min(1);

const addCategoryValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await addCategorySchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};

const updateCategorySchema = Joi.object()
  .keys({
    parent_id: Joi.number(),
    title: Joi.string(),
    meta_title: Joi.string(),
    slug: Joi.string(),
    content: Joi.string()
  })
  .required()
  .min(1);

const updateCategoryValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await updateCategorySchema.validateAsync(req.body);
    return next();
  } catch (err) {
    console.log(err);
    next(ApiError.badRequest(err.message));
  }
};

export { addCategoryValidation, updateCategoryValidation };
