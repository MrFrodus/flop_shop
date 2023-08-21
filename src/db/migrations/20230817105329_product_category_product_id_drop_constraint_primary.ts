import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("product_category", (table) => {
    table.dropPrimary("PRIMARY");
  });
}

export async function down(knex: Knex): Promise<void> {}
