import { BaseService } from "./baseService";
import { OrderRepository, orderRepository } from "../repository/order";
import { IOrder } from "../models/order";
import { cartItemRepository } from "../repository/cartItem";
import { IOrderItem } from "../models/orderItem";
import { orderItemRepository } from "../repository/orderItem";
import { IShipping } from "../models/shipping";
import { ShippingRepository, shippingRepository } from "../repository/shipping";
import { ITransaction } from "../models/transaction";

export class OrderService extends BaseService<IOrder> {
  protected repository: OrderRepository;

  constructor(repository: OrderRepository) {
    super(repository);
  }

  addWithRelations = async (newOrderData: {
    cart_items_ids: number[];
    order: IOrder;
    shipping: IShipping;
    transaction: ITransaction;
  }): Promise<number | null> => {
    const cartItems = await cartItemRepository.getMany(
      newOrderData.cart_items_ids
    );

    if (!cartItems.length) {
      return null;
    }

    const orderItems: IOrderItem[] = cartItems.map((item) => {
      return {
        product_id: item.product_id,
        total_price:
          item.product_price! * item.quantity - item.product_discount!,
        discount: item.product_discount,
        quantity: item.quantity,
      };
    });

    const [newOrderId] = await this.repository.add(newOrderData.order);

    newOrderData.shipping.order_id = newOrderId;

    orderItems.map(function (obj) {
      obj.order_id = newOrderId;
    });

    await cartItemRepository.deleteMany(newOrderData.cart_items_ids);

    await shippingRepository.add(newOrderData.shipping);

    await orderItemRepository.addMany(orderItems);

    return newOrderId!;
  };
}

export const orderService = new OrderService(orderRepository);
