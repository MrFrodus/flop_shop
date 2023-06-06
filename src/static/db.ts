const userSelectedFields: string[] = [
  "id",
  "first_name",
  "last_name",
  "middle_name",
  "mobile",
  "email",
  "password_hash",
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
  "ends_at"
]

const productMetaSelectedFields: string[] = [
  "id",
  "product_id",
  "key",
  "content"
]

export const dbStaticData = {
  selectedFields: {
    user: userSelectedFields,
    product: productSelectedFields,
    productMeta: productMetaSelectedFields,
  },
};
