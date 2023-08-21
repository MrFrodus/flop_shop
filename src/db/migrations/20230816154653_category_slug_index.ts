import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("category", (table) => {
    table.index("slug", "idx_slug");
  });
}

export async function down(knex: Knex): Promise<void> {}
