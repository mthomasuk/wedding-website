const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const body = require("koa-body");
const compress = require("koa-compress");
const helmet = require("koa-helmet");

const cors = require("@koa/cors");

const { HOST, PORT } = require("./config");

const {
    gifts: {
        getGifts,
    },
    guests: { 
        getGuestByID,
        addAllergyInfo,
        confirmAttendance, 
        declineToAttend,
        setDinnerChoices,
        setSongChoices,
    },
} = require("./controllers");

const {
    env: { NODE_ENV },
} = process;

const application = new Koa();
const router = new Router();

if (NODE_ENV !== "production") {
    application.use(cors());
} else {
    application.use(helmet());
}
application.use(compress());
application.use(body({ multipart: false }));
application.use(serve("static"));

router.get("/gifts", getGifts);
router.get("/guests/:key", getGuestByID);

router.post("/guests/:key/confirm", confirmAttendance);
router.post("/guests/:key/decline", declineToAttend);
router.post("/guests/:id/dinner", setDinnerChoices);
router.post("/guests/:key/allergy", addAllergyInfo);
router.post("/guests/:id/songs", setSongChoices);

application.use(router.routes()).use(router.allowedMethods());

application.listen(PORT, async () => {
    console.log(`Listening on :: http://${HOST}:${PORT}`);
});
