import { staticData } from "../static/index";
import { IUser } from "../models/users";
import { BaseRepository } from "./baseRepository";

export class UsersRespository extends BaseRepository<IUser> {}

export const usersRepository = new UsersRespository(
  "users",
  staticData.db.selectedFields.user.map((value) => {
    return "users." + value;
  })
);
