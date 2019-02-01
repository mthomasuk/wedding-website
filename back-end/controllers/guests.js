const {
    db: { knex },
} = require("../database");

const { SECRET } = require("../config");

const regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// key signature is Buffer.from(`${SECRET}+${UUID}+${Date Object}`).toString()
// hopefully no-one reads this and breaks my INCREDIBLY STRONG SECRET ENCRYPTION
const validateKey = key => {
    try {
        const [isSecret, isUUID, isDate] = Buffer.from(key, "base64")
            .toString()
            .split("+");

        if (isSecret !== SECRET) return false;
        if (!regexGuid.test(isUUID)) return false;

        new Date(isDate);

        return true;
    } catch (_) {
        return false;
    }
};

module.exports = {
    getGuestByID: async ctx => {
        try {
            if (validateKey(ctx.params.key)) {
                const { rows } = await knex.raw(
                    "SELECT * FROM guests WHERE key = ?;",
                    [ctx.params.key],
                );
                ctx.status = 200;
                ctx.body = rows.length ? rows[0] : {};
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
