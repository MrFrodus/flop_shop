export interface IShipping {
  id?: number;
  order_id?: number;
  user_id: number;
  region: string;
  city: string;
  country: string;
  address: string;
  price: number;
  method: string;
}
