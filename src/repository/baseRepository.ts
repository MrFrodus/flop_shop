import db from "../db/db";

export default class BaseRepository<T> {
  table: string;

  selectedColumns: string[];

  joinTable: string;

  joinSelectedColumns: string[];

  joinCondition: string;

  constructor(table: string, selectedColumns: string[]) {
    this.table = table;
    this.selectedColumns = selectedColumns;
  }

  add(item: object): Promise<number[]> {
    return db(this.table).insert(item);
  }

  getById(id: number): Promise<T[]> {
    return db(this.table)
      .select(...this.selectedColumns)
      .where({ id });
  }

  getAll(): Promise<T[][]> {
    return db(this.table).select(...this.selectedColumns);
  }

  update(id: number, changes: object): Promise<T[]> {
    return db(this.table)
      .where({ id })
      .update(changes)
      .then(() => {
        return this.getById(id);
      });
  }

  delete(id: number): Promise<number> {
    return db(this.table).where({ id }).del();
  }
}
