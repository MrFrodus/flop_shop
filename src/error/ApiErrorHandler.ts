import express from "express";
import ApiError from "./ApiError";

const apiErrorHandler = (
  err: Error,
  req: express.Request,
  res: express.Response
): express.Response => {
  if (err instanceof ApiError) {
    console.log(err.code);
    console.log(err);

    return res.status(err.code).json(err);
  }

  return res.status(500).json(err);
};

export default apiErrorHandler;
