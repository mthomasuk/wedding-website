const {
    PG: { PG_HOST, PG_DB, PG_PASSWORD, PG_USER },
} = require("../config");

let knex;

module.exports = {
    initDB: async () => {
        try {
            knex = require("knex")({
                client: "pg",
                connection: {
                    host: PG_HOST,
                    user: PG_USER,
                    password: PG_PASSWORD,
                    database: PG_DB,
                },
                pool: {
                    min: 0,
                    max: 5,
                },
            });
            await knex.raw("SELECT 1;");
            return knex;
        } catch (err) {
            throw new Error(err);
        }
    },
    knex,
};
