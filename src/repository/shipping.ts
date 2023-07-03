import { staticData } from "../static/index";
import { IShipping } from "../models/shipping";
import { BaseRepository } from "./baseRepository";

export class ShippingRepository extends BaseRepository<IShipping> {}

export const shippingRepository = new ShippingRepository(
  "shipping",
  staticData.db.selectedFields.shipping.map((value) => {
    return "shipping." + value;
  })
);
