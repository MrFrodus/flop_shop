import { IUser } from "./user";

export interface IProduct {
  id?: number;
  user_id: number;
  title: string;
  meta_title: string;
  slug: string;
  summary: string;
  sku: string;
  price: number;
  discount: number;
  quantity: number;
  shop: string;
  content: string;
  starts_at: Date;
  ends_at: Date;
  user?: IUser | null;
  image: string;
  category_id: number;
  rating_avg?: number;
}
