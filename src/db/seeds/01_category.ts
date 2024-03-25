import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("category").del();

  await knex("category").insert([
    {
      id: 1,
      title: "Clothes",
      meta_title: "clothes",
      slug: "clothes",
    },
    {
      id: 2,
      title: "Electronics",
      meta_title: "electronics",
      slug: "electronics",
    },
    {
      id: 3,
      title: "Health and Household",
      meta_title: "health_and_household",
      slug: "health_and_household",
    },
    {
      id: 4,
      title: "Luggage",
      meta_title: "luggage",
      slug: "luggage",
    },
    {
      id: 5,
      title: "Movies Television",
      meta_title: "movies_television",
      slug: "movies_television",
    },
    {
      id: 6,
      title: "Pet Supplies",
      meta_title: "pet_supplies",
      slug: "pet_supplies",
    },
    {
      id: 7,
      title: "Sport Fitness",
      meta_title: "sport_fitness",
      slug: "sport_fitness",
    },
    {
      id: 8,
      title: "Video Games",
      meta_title: "video_games",
      slug: "video_games",
    },
    {
      id: 9,
      title: "Laptops",
      parent_id: 2,
      meta_title: "laptops",
      slug: "laptops",
    },
  ]);
}
