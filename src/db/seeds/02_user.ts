import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("user").del();

  await knex("user").insert([
    {
      id: 1,
      first_name: "bob",
      last_name: "flop",
      mobile: 3809831709,
      email: "flop@floppus.com",
      password: "123456",
      admin: 0,
      vendor: 1,
    },
  ]);
}
