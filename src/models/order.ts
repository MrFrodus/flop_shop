export interface IOrder {
  id?: number;
  user_id: number;
  status: string;
  sub_total: number;
  item_discount: number;
  tax: number;
  total: number;
  promo: string;
  discount: number;
  grand_total: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  mobile: string;
  email: string;
  commentary: string;
  content: string;
}
