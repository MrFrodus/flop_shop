import { staticData } from "../static/index";
import { IUser } from "../models/user";
import { BaseRepository } from "./baseRepository";

export class UserRepository extends BaseRepository<IUser> {}

export const userRepository = new UserRepository(
  "user",
  staticData.db.selectedFields.user.map((value) => {
    return "user." + value;
  })
);
