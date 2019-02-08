const {
    db: { knex },
} = require("../database");

module.exports = {
    getGuestByID: async ctx => {
        try {
            if (ctx.params.key) {
                const { rows: famRows } = await knex.raw(
                    `SELECT family_id FROM guests 
                    WHERE key = ?`,
                    [ctx.params.key],
                );

                const { family_id } = famRows[0];
                const { rows } = await knex.raw(
                    `SELECT * FROM guests 
                    WHERE family_id = ?`,
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
    confirmAttendance: async ctx => {
        try {
            if (ctx.params.key) {
                const { rows: famRows } = await knex.raw(
                    `SELECT family_id FROM guests 
                    WHERE key = ?`,
                    [ctx.params.key],
                );

                const { family_id } = famRows[0];

                await knex.raw(
                    `UPDATE guests 
                    SET confirmed_attendance = true
                    WHERE family_id = ?`,
                    [family_id],
                );
                ctx.status = 200;
            } else {
                ctx.status = 403;
                ctx.body = "Get lost ya filthy rat";
            }
        } catch (err) {
            console.warn({ err });
            ctx.status = 500;
        }
    },
    declineToAttend: async ctx => {
        try {
            if (ctx.params.key) {
                const { rows: famRows } = await knex.raw(
                    `SELECT family_id FROM guests 
                    WHERE key = ?`,
                    [ctx.params.key],
                );

                const { family_id } = famRows[0];

                await knex.raw(
                    `UPDATE guests 
                    SET confirmed_attendance = false
                    WHERE family_id = ?`,
                    [family_id]
                );
                ctx.status = 200;
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
