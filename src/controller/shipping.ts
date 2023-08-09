import BaseController from "./baseController";
import { shippingService, ShippingService } from "../service/shipping";
import { IShipping } from "../models/shipping";

class ShippingController extends BaseController<IShipping> {
  protected service: ShippingService;
}

const shippingController = new ShippingController(shippingService);

export default shippingController;
