export interface ITransaction {
    id: number,
    user_id: number,
    order_id: number,
    code: string,
    type: number,
    mode: number,
    status: string,
}