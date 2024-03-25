export default {
  development: {
    client: "mysql2",
    connection: {
      host: "db",
      port: 3306,
      user: "root",
      password: "password",
      database: "flop_shop",
    },
    migrations: {
      directory: "migrations",
    },
    seeds: {
      directory: "seeds",
    },
  },
};
