import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .alterTable("user", (table) => {
      table.string("mobile").notNullable().alter();
    })
    .alterTable("order", (table) => {
      table.string("mobile").notNullable().alter();
    });
}

export async function down(knex: Knex): Promise<void> {}

