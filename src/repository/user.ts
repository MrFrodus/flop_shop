import { staticData } from "../static/index";
import { IUser } from "../models/user";
import { BaseRepository } from "./baseRepository";
import db from "../db/db";

export class UserRepository extends BaseRepository<IUser> {
  getByEmail(email: string): Promise<IUser[]> {
    return db(this.table)
      .select(...this.selectedColumns)
      .where({ email });
  }
}

export const userRepository = new UserRepository(
  "user",
  staticData.db.selectedFields.user.map((value) => {
    return "user." + value;
  })
);
