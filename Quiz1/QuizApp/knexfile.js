// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'Cluckr'
    },
    migrations: {
      tableName: "knex-migrations",
      directory: "./db/migrations"
    }
  }
};




