import db from "../db/db";

export class BaseRepository<T> {
  table: string;
  selectedColumns: string[];
  joinTable: string;
  joinSelectedColumns: string[];
  joinCondition: string;

  constructor(
    table: string,
    selectedColumns: string[],
  ) {
    this.table = table;
    this.selectedColumns = selectedColumns;
  }

  add(item: object): Promise<number[]> {
    return db(this.table).insert(item);
  }

  getById(id: string): Promise<T[]> {
    return db(this.table)
      .select(...this.selectedColumns)
      .where({ id });
  }

  getAll(): Promise<T[][]> {
    return db(this.table).select(...this.selectedColumns);
  }

  update(id: string, changes: object): Promise<T[]> {
    return db(this.table)
      .where({ id })
      .update(changes)
      .then(() => {
        return this.getById(id);
      });
  }

  remove(id: string): Promise<number> {
    return db(this.table).where({ id }).del();
  }
}
