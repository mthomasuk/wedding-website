const {
    db: { knex },
} = require("../database");

module.exports = {
    getGuestByID: async ctx => {
        try {
            if (ctx.params.key) {
                const { rows: famRows } = await knex.raw(
                    "SELECT family_id FROM guests WHERE identifier = ?;",
                    [ctx.params.key],
                );


                const { family_id } = famRows[0];
                const { rows } = await knex.raw(
                    "SELECT * FROM guests WHERE family_id = ?;",
                    [family_id]
                );

                ctx.status = 200;
                ctx.body = rows;
            } else {
                ctx.status = 403;
                ctx.body = "Get lost ya filthy rat";
            }
        } catch (err) {
            console.warn({ err });
            ctx.status = 500;
        }
    },
};
