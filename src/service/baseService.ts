import { BaseRepository } from "../repository/baseRepository";
import { BaseModel } from "../models/baseModel";

export class BaseService {
  protected repository: BaseRepository<BaseModel>;

  constructor(repository: BaseRepository<BaseModel>) {
    this.repository = repository;
  }

  add(item: object): Promise<number[]> {
    return this.repository.add(item);
  }

  getById = async (id: string): Promise<BaseModel[] | null> => {
    const item = await this.repository.getById(id);
    if (!item.length) {
      return null;
    } else {
      return item;
    }
  };

  getAll = async (): Promise<BaseModel[][] | null> => {
    const items = await this.repository.getAll();
    if (!items.length) {
      return null;
    } else {
      return items;
    }
  };

  update = async (id: string, changes: object): Promise<BaseModel[] | null> => {
    const updatedItem = await this.repository.update(id, changes);
    if (!updatedItem.length) {
      return null;
    } else {
      return updatedItem;
    }
  };

  remove = async (id: string): Promise<number> => {
    const removedItem = await this.repository.remove(id);
    return removedItem;
  };
}
