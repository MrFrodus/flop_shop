import { BaseModel } from "./../models/baseModel";
import { BaseService } from "../service/baseService";
import express from "express";
import { ApiError } from "../error/ApiError";

export class BaseController {
  protected service: BaseService;

  constructor(service: BaseService) {
    this.service = service;
  }

  getById = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const item: BaseModel | null = await this.service.getById(
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
    const items: BaseModel[][] | null = await this.service.getAll();

    if (!items) {
      return next(ApiError.notFound("There is no items yet"));
    }
    return res.status(200).json(items);
  };

  add = async (req: express.Request, res: express.Response) => {
    const newItemId = await this.service.add(req.body as object);
    return res.status(201).json(newItemId[0]);
  };

  update = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const updatedItem: BaseModel | null = await this.service.update(
      parseInt(req.params.id as string),
      req.body as object
    );

    if (!updatedItem) {
      return next(ApiError.notFound("Such item doesn't exist"));
    }
    return res.status(201).json(updatedItem);
  };

  remove = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const removedItemId = await this.service.remove(parseInt(req.params.id as string));

    if (removedItemId === 0) {
      return next(ApiError.notFound("Such item doesn't exist"));
    }

    return res.status(200).json(removedItemId);
  };
}
