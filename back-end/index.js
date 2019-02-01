const Koa = require("koa");
const serve = require("koa-static");
const body = require("koa-body");
const compress = require("koa-compress");
const helmet = require("koa-helmet");

const { HOST, PORT } = require("./config");

const { initDB } = require("./database");

const application = new Koa();

application.use(helmet());
application.use(compress());
application.use(body({ multipart: false }));
application.use(serve("static"));

application.listen(PORT, () => {
    initDB();
    console.log(`Listening on :: http://${HOST}:${PORT}`);
});
