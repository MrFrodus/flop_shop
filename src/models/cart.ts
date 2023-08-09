import { ICartItem } from "./cartItem";

export interface ICart {
  id?: number;
  user_id: number;
  content?: string;
  cart_items?: ICartItem[];
}
