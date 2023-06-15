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

  getById = async (id: number): Promise<BaseModel | null> => {
    const item = await this.repository.getById(id);
    if (!item.length || !item) {
      return null;
    } else {
      return item[0]!;
    }
  };

  getAll = async (): Promise<BaseModel[][] | null> => {
    const items = await this.repository.getAll();
    if (!items.length || !items) {
      return null;
    } else {
      return items;
    }
  };

  update = async (id: number, changes: object): Promise<BaseModel | null> => {
    const updatedItem = await this.repository.update(id, changes);
    if (!updatedItem.length || !updatedItem) {
      return null;
    } else {
      return updatedItem[0]!;
    }
  };

  remove = async (id: number): Promise<number> => {
    const removedItem = await this.repository.remove(id);
    return removedItem;
  };
}
