import BaseService from "./baseService";
import { shippingRepository, ShippingRepository } from "../repository/shipping";
import { IShipping } from "../models/shipping";

export class ShippingService extends BaseService<IShipping> {
  protected repository: ShippingRepository;
}

export const shippingService = new ShippingService(shippingRepository);
