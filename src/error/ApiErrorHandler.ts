import express from "express";
import ApiError from "./ApiError";

const apiErrorHandler = (
  err: Error,
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: express.NextFunction
): express.Response => {
  if (err instanceof ApiError) {
    return res.status(err.code).json(err);
  }

  console.log(err)

  return res.status(500).json(err);
};

export default apiErrorHandler;
