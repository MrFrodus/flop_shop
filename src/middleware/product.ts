import path from "path";
import express from "express";
import Joi from "joi";
import multer from "multer";
import ApiError from "../error/ApiError";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./images");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${req.body.slug}_${new Date()
        .toISOString()
        .replace(/:/g, "-")}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const addProductSchema = Joi.object()
  .keys({
    user_id: Joi.number().required(),
    title: Joi.string().required(),
    meta_title: Joi.string(),
    slug: Joi.string().required(),
    summary: Joi.string(),
    sku: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number().required(),
    quantity: Joi.number().required(),
    shop: Joi.string().required(),
    content: Joi.string(),
    starts_at: Joi.date(),
    ends_at: Joi.date(),
    image: Joi.string(),
  })
  .required()
  .min(1);

const addProductValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await addProductSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    console.log(err);

    return next(ApiError.badRequest(err.message));
  }
};

const updateProductSchema = Joi.object()
  .keys({
    user_id: Joi.number(),
    title: Joi.string(),
    meta_title: Joi.string(),
    slug: Joi.string(),
    summary: Joi.string(),
    sku: Joi.string(),
    price: Joi.number(),
    discount: Joi.number(),
    quantity: Joi.number(),
    shop: Joi.string(),
    content: Joi.string(),
    starts_at: Joi.date(),
    ends_at: Joi.date(),
  })
  .required()
  .min(1);

const updateProductValidation = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    await updateProductSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    console.log(err);

    return next(ApiError.badRequest(err.message));
  }
};

export { addProductValidation, updateProductValidation, upload };
