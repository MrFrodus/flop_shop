import { BaseService } from "../service/baseService";
import express from "express";
import { ApiError } from "../error/ApiError";

export class BaseController<T> {
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
      parseInt(req.params.id as string)
    );

    if (!item) {
      return next(ApiError.notFound("Such item doesn't exist"));
    }
    return res.status(200).json(item);
  };

  getAll = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const items: T[][] = await this.service.getAll();

    return res.status(200).json(items);
  };

  add = async (req: express.Request, res: express.Response) => {
    const newItemId: number[] = await this.service.add(req.body as object);
    return res.status(201).json(newItemId[0]);
  };

  update = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const updatedItem: Awaited<T> | null = await this.service.update(
      parseInt(req.params.id as string),
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
      parseInt(req.params.id as string)
    );

    if (numDeletedItems === 0) {
      return next(ApiError.notFound("Such item doesn't exist"));
    }

    return res.status(200).json(numDeletedItems);
  };
}
