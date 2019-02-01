const {
    PG: { PG_HOST, PG_DB, PG_PASSWORD, PG_USER },
} = require("../config");

class Database {
    constructor() {
        console.log("CONSTRUCTING");
        try {
            const knex = require("knex")({
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
            this.knex = knex;
        } catch (err) {
            throw new Error(err);
        }
    }
}

const db = new Database();

module.exports = {
    db,
};
