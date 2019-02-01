const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const body = require("koa-body");
const compress = require("koa-compress");
const helmet = require("koa-helmet");

const { HOST, PORT } = require("./config");

const {
    guests: { getAllGuests, getGuestByID },
} = require("./controllers");

const application = new Koa();
const router = new Router();

application.use(helmet());
application.use(compress());
application.use(body({ multipart: false }));
application.use(serve("static"));

router.get("/guests", getAllGuests);
router.get("/guests/:id", getGuestByID);

application.use(router.routes()).use(router.allowedMethods());

application.listen(PORT, async () => {
    console.log(`Listening on :: http://${HOST}:${PORT}`);
});

