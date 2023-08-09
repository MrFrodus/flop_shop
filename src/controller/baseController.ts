import express from "express";
import BaseService from "../service/baseService";
import ApiError from "../error/ApiError";

export default class BaseController<T extends object> {
  protected service: BaseService<T>;

  constructor(service: BaseService<T>) {
    this.service = service;
  }

  getById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const item: Awaited<T> | null = await this.service.getById(
      Number(req.params.id as string)
    );

    if (!item) {
      return next(ApiError.notFound("Such item doesn't exist"));
    }

    return res.status(200).json(item);
  };

  getAll = async (req: express.Request, res: express.Response) => {
    const items: T[][] = await this.service.getAll();

    return res.status(200).json(items);
  };

  add = async (req: express.Request, res: express.Response) => {
    const newItemId: number[] = await this.service.add(req.body as T);

    return res.status(201).json(newItemId[0]);
  };

  update = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const updatedItem: Awaited<T> | null = await this.service.update(
      Number(req.params.id as string),
      req.body as object
    );

    if (!updatedItem) {
      return next(ApiError.notFound("Such item doesn't exist"));
    }

    return res.status(201).json(updatedItem);
  };

  delete = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const numDeletedItems: number = await this.service.delete(
      Number(req.params.id as string)
    );

    if (numDeletedItems === 0) {
      return next(ApiError.notFound("Such item doesn't exist"));
    }

    return res.status(200).json(numDeletedItems);
  };
}
