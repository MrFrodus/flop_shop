import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .alterTable("user", (table) => {
      table.bigInteger("mobile").notNullable().alter();
    })
    .alterTable("order", (table) => {
      table.bigInteger("mobile").notNullable().alter();
    });
}

export async function down(knex: Knex): Promise<void> {}

