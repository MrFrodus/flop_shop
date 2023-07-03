import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("transaction", (table) => {
    table.enum("type", ["Credit", "Debit"]).notNullable().alter();
    table
      .enum("mode", [
        "Offline",
        "Cash on delivery",
        "Cheque",
        "Draft",
        "Wired",
        "Online",
      ])
      .notNullable().alter();
    table
      .enum("status", [
        "New",
        "Cancelled",
        "Failed",
        "Pending",
        "Declined",
        "Rejected",
        "Success",
      ])
      .notNullable().alter();
  });
}

export async function down(knex: Knex): Promise<void> {}
