import { staticData } from "../static/index";
import { IUser } from "../models/user";
import { BaseRepository } from "./baseRepository";

export class UserRespository extends BaseRepository<IUser> {}

export const userRepository = new UserRespository(
  "user",
  staticData.db.selectedFields.user.map((value) => {
    return "user." + value;
  })
);
