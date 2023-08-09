import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .alterTable("user", (table) => {
      table.integer("mobile").notNullable().unique().alter();
    })
    .alterTable("order", (table) => {
      table.integer("mobile").notNullable().unique().alter();
    });
}

export async function down(knex: Knex): Promise<void> {}

