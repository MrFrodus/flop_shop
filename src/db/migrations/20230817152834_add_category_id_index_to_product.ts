import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("product", (table) => {
    table.integer("category_id").unsigned().notNullable();
    table
      .foreign("category_id")
      .references("category.id")
      .withKeyName("fk_product_category");
    table.index("category_id", "idx_product_category");
  });
}

export async function down(knex: Knex): Promise<void> {}

