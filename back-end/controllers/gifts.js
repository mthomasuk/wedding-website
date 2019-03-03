const {
    db: { knex },
} = require("../database");

module.exports = {
    // GET
    getGifts: async ctx => {
        try {
            const { rows } = await knex.raw("SELECT * FROM gifts");
            ctx.status = 200;
            ctx.body = rows;
        } catch (err) {
            console.warn({ err });
            ctx.status = 500;
        }
    },
};
