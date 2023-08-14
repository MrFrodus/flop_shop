import BaseRepository from "../repository/baseRepository";

export default class BaseService<T> {
  protected repository: BaseRepository<T>;

  constructor(repository: BaseRepository<T>) {
    this.repository = repository;
  }

  add(item: object): Promise<number[]> {
    return this.repository.add(item);
  }

  getById = async (id: number): Promise<T | null> => {
    const [item] = await this.repository.getById(id);
    if (!item) {
      return null;
    }

    return item;
  };

  getAll = async (): Promise<unknown[]> => {
    return this.repository.getAll();
  };

  update = async (id: number, changes: object): Promise<T | null> => {
    const [updatedItem] = await this.repository.update(id, changes);
    if (!updatedItem) {
      return null;
    }

    return updatedItem!;
  };

  delete = async (id: number): Promise<number> => {
    const removedItem = await this.repository.delete(id);

    return removedItem;
  };
}
