import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id");
      table.string("first_name", 50).nullable();
      table.string("last_name", 50).nullable();
      table.string("middle_name", 50).nullable();
      table.string("mobile", 15).nullable();
      table.string("email", 50).notNullable().unique();
      table.string("password_hash", 32).notNullable();
      table.tinyint("admin", 1).notNullable().defaultTo(0);
      table.tinyint("vendor", 1).notNullable().defaultTo(0);
      table.string("intro", 255).nullable();
      table.string("address", 50).nullable();
      table.string("city", 50).nullable();
      table.string("region", 50).nullable();
      table.string("country", 50).nullable();
      table.text("profile").nullable();
      table.timestamp("registrated_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.index("email", "idx_user_email");
    })
    .createTable("product", (table) => {
      table.increments("id");
      table.integer("user_id").unsigned().notNullable();
      table.string("title", 50).notNullable();
      table.string("meta_title", 100).nullable();
      table.string("slug", 100).notNullable();
      table.text("summary").nullable();
      table.string("sku").notNullable();
      table.float("price").notNullable().defaultTo(0);
      table.float("discount").notNullable().defaultTo(0);
      table.smallint("quantity").notNullable().defaultTo(0);
      table.tinyint("shop").notNullable().defaultTo(0);
      table.text("content").nullable();
      table.dateTime("starts_at").nullable();
      table.dateTime("ends_at").nullable();
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.index("user_id", "idx_product_user");
      table.foreign("user_id").references("user.id").withKeyName("fk_product_user");
    })
    .createTable("product_meta", (table) => {
      table.increments("id");
      table.integer("product_id").unsigned().notNullable();
      table.string("key", 255).notNullable();
      table.text("content").nullable();
      table.index("product_id", "idx_meta_product");
      table.foreign("product_id").references("product.id").withKeyName("fk_meta_product");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("product_review", (table) => {
      table.increments("id");
      table.integer("product_id").unsigned().notNullable();
      table.integer("parent_id").unsigned().nullable();
      table.string("title").notNullable();
      table.smallint("rating").notNullable().defaultTo(0);
      table.text("content").nullable();
      table.tinyint("published", 1).notNullable().defaultTo(0);
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.foreign("parent_id").references("product_review.id").withKeyName("fk_review_parent");
      table.foreign("product_id").references("product.id").withKeyName("fk_review_product");
      table.index("parent_id", "idx_review_parent");
      table.index("product_id", "idx_review_product");
    })
    .createTable("category", (table) => {
      table.increments("id");
      table.integer("parent_id").unsigned().nullable();
      table.string("title", 50).notNullable();
      table.string("meta_title", 100).nullable();
      table.string("slug", 100).notNullable();
      table.text("content").nullable();
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.foreign("parent_id").references("category.id").withKeyName("fk_category_parent");
      table.index("parent_id", "idx_category_parent");
    })
    .createTable("product_category", (table) => {
      table.integer("product_id").unsigned().notNullable().primary();
      table.integer("category_id").unsigned().notNullable().primary();
      table.index("product_id", "idx_pc_product");
      table.index("category_id", 'idx_pc_category');
      table.foreign("product_id").references("product.id").withKeyName("fk_pc_product");
      table.foreign("category_id").references("category.id").withKeyName("fk_pc_category");
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("cart", (table) => {
      table.increments("id");
      table.integer("user_id").unsigned().nullable();
      table.string("status").notNullable();
      table.text("content").nullable();
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.foreign("user_id").references("user.id").withKeyName("fk_cart_user");
      table.index("user_id", "idx_cart_user");
    })
    .createTable("cart_item", (table) => {
      table.increments("id");
      table.integer("product_id").unsigned().notNullable();
      table.integer("cart_id").unsigned().notNullable();
      table.string("sku", 100).notNullable();
      table.float("price").notNullable().defaultTo(0);
      table.float("discount").notNullable().defaultTo(0);
      table.smallint("quantity").notNullable().defaultTo(0);
      table.tinyint("active", 1).notNullable().defaultTo(0);
      table.text("content").nullable();
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.foreign("product_id").references("product.id").withKeyName("fk_cart_item_product");
      table.foreign("cart_id").references("cart.id").withKeyName("fk_cart_item_cart");
      table.index("cart_id", "idx_cart_item_cart");
      table.index("product_id", "idx_cart_item_product");
    }).createTable("order", (table) => {
      table.increments("id");
      table.integer("user_id").unsigned().nullable();
      table.string("status").notNullable();
      table.float("sub_total").notNullable().defaultTo(0);
      table.float("item_discount").notNullable().defaultTo(0);
      table.float("tax").notNullable().defaultTo(0);
      table.float("shipping").notNullable().defaultTo(0);
      table.float("total").notNullable().defaultTo(0);
      table.string("promo", 50).nullable();
      table.float("discount").notNullable().defaultTo(0);
      table.float("grand_total").notNullable().defaultTo(0);
      table.string("first_name", 50).nullable();
      table.string("last_name", 50).nullable();
      table.string("middle_name", 50).nullable();
      table.string("mobile", 15).nullable();
      table.string("email", 50).notNullable().unique();
      table.string("commentary", 100).nullable();
      table.string("address", 50).nullable();
      table.string("city", 50).nullable();
      table.string("region", 50).nullable();
      table.string("country", 50).nullable();
      table.text("content").nullable();
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.foreign("user_id").references("user.id").withKeyName("fk_order_user");
      table.index("user_id", "idx_order_user");
    }).createTable("order_item", (table) => {
      table.increments("id");
      table.integer("product_id").unsigned().notNullable();
      table.integer("order_id").unsigned().notNullable();
      table.string("sku", 100).notNullable();
      table.float("price").notNullable().defaultTo(0);
      table.float("discount").notNullable().defaultTo(0);
      table.smallint("quantity").notNullable().defaultTo(0);
      table.text("content").nullable();
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.foreign("product_id").references("product.id").withKeyName("fk_order_item_product");
      table.foreign("order_id").references("order.id").withKeyName("fk_order_item_order");
      table.index("order_id", "idx_order_item_order");
      table.index("product_id", "idx_order_item_product");
    }).createTable("transaction", (table) => {
      table.increments("id");
      table.integer("user_id").unsigned().notNullable();
      table.integer("order_id").unsigned().notNullable();
      table.string("code", 100).notNullable();
      table.smallint("type").notNullable().defaultTo(0);
      table.smallint("mode").notNullable().defaultTo(0);
      table.string("status").notNullable();
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_on").nullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.foreign("user_id").references("user.id").withKeyName("fk_transaction_user");
      table.foreign("order_id").references("order.id").withKeyName("fk_transaction_order");
      table.index("user_id", "idx_transaction_user");
      table.index("order_id", "idx_transaction_order");
    });
}

export async function down(_knex: Knex): Promise<void> {
}
