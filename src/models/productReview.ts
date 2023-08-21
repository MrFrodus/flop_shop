export interface IProductReview {
  id?: number;
  parent_id?: number;
  product_id: number;
  title: string;
  rating: number;
  content?: string;
  published: number;
}
