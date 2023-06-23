import { BaseService } from "./baseService";
import { OrderRepository, orderRepository } from "../repository/order";
import { IOrder } from "../models/order";
import { cartItemRepository } from "../repository/cartItem";
import { IOrderItem } from "../models/orderItem";
import { orderItemRepository } from "../repository/orderItem";

export class OrderService extends BaseService<IOrder> {
  protected repository: OrderRepository;

  constructor(repository: OrderRepository) {
    super(repository);
  }

  createNewOrder = async (cart_items_ids: number[], newOrder: IOrder): Promise<number> => {
    const cartItems = await cartItemRepository.getMany(cart_items_ids);

    //check for cartItems

    const orderItems: IOrderItem[] = cartItems.map(item => {
      return {
        product_id: item.product_id,
        total_price: (item.product_price! * item.quantity) - item.product_discount!,
        discount: item.product_discount,
        quantity: item.quantity,
      }
    })

    console.log(orderItems);

    const [newOrderId] = await this.repository.add(newOrder);

    orderItems.map(function(obj) {
      obj.order_id = newOrderId;
    });

    await cartItemRepository.deleteMany(cart_items_ids);

    await orderItemRepository.addMany(orderItems);

    return newOrderId!;
  
  }
}

export const orderService = new OrderService(orderRepository);
