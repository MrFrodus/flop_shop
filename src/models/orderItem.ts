import { IProduct } from "./product";

export interface IOrderItem {
    id?: number,
    product_id: number,
    order_id?: number,
    total_price: number,
    discount?: number,
    quantity: number,
    content?: string,
    product?: IProduct | null,
}