export default {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "flop_shop",
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "migrations",
    },
  },
};
