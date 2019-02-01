const {
    db: { knex },
} = require("../database");

module.exports = {
    getGuestByID: async ctx => {
        try {
            const { rows } = await knex.raw(
                "SELECT * FROM guests WHERE id = ?;",
                [ctx.params.id],
            );
            ctx.status = 200;
            ctx.body = rows.length ? rows[0] : {};
        } catch (err) {
            console.warn({ err });
            ctx.status = 500;
        }
    },
};
