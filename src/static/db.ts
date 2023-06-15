const userSelectedFields: string[] = [
  "id",
  "first_name",
  "last_name",
  "middle_name",
  "mobile",
  "email",
  "password",
  "admin",
  "vendor",
  "intro",
  "address",
  "city",
  "region",
  "country",
  "profile",
];

const productSelectedFields: string[] = [
  "id",
  "user_id",
  "title",
  "meta_title",
  "slug",
  "summary",
  "sku",
  "price",
  "discount",
  "quantity",
  "shop",
  "content",
  "starts_at",
  "ends_at",
];

const productMetaSelectedFields: string[] = [
  "id",
  "product_id",
  "key",
  "content",
];

const productReviewSelectedFields: string[] = [
  "id",
  "product_id",
  "parent_id",
  "title",
  "rating",
  "content",
  "published",
];

const categorySelectedFields: string[] = [
  "id",
  "parent_id",
  "title",
  "meta_title",
  "slug",
  "content",
];

const cartSelectedFields: string[] = [
  "id",
  "user_id",
  "status",
  "content",
];


const cartItemSelectedFields: string[] = [
  "id",
  "product_id",
  "cart_id",
  "sku",
  "price",
  "discount",
  "quantity",
  "active",
  "content",
]

const orderSelectedFields: string[] = [
  "id",
  "user_id",
  "status",
  "sub_total",
  "item_discount",
  "tax",
  "shipping",
  "total",
  "promo",
  "discount",
  "grand_total",
  "first_name",
  "last_name",
  "middle_name",
  "mobile",
  "email",
  "commentary",
  "address",
  "city",
  "region",
  "country",
  "content",
]

const orderItemSelectedFields: string[] = [
  "id",
  "product_id",
  "order_id",
  "sku",
  "price",
  "discount",
  "quantity",
  "content"
]

const transactionSelectedFields: string[] = [
  "id",
  "user_id",
  "order_id",
  "code",
  "type",
  "mode",
  "status",
]

export const dbStaticData = {
  selectedFields: {
    user: userSelectedFields,
    product: productSelectedFields,
    productMeta: productMetaSelectedFields,
    productReview: productReviewSelectedFields,
    category: categorySelectedFields,
    cart: cartSelectedFields,
    cartItem: cartItemSelectedFields,
    order: orderSelectedFields,
    orderItem: orderItemSelectedFields,
    transaction: transactionSelectedFields,
  },
};
