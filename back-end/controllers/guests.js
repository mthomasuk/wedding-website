module.exports = {
    getAllGuests: ctx => {
        ctx.status = 200;
        ctx.body = "OK";
    },
    getGuestByID: ctx => {
        console.log(ctx.params.id);
        ctx.status = 200;
        ctx.body = "OK";
    },
};
