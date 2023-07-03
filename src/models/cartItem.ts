import { IProduct } from "./product";

export interface ICartItem {
    id?: number,
    product_id: number,
    cart_id: number,
    quantity: number,
    content?: string,
    product?: IProduct | null,
    product_user_id?: number,
    product_title?: string,
    product_meta_title?: string,
    product_slug?: string,
    product_summary?: string,
    product_sku?: string,
    product_price?: number,
    product_discount?: number,
    product_quantity?: number,
    product_shop?: number,
    product_content?: number,
    product_starts_at?: Date,
    product_ends_at?: Date
}