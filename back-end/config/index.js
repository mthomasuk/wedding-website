const {
    env: { PORT, HOST, PG_HOST, PG_DB, PG_USER, PG_PASSWORD },
} = process;

module.exports = {
    PORT: PORT || 7778,
    HOST: HOST || "localhost",
    PG: {
        PG_HOST: PG_HOST || "localhost",
        PG_DB: PG_DB || "wedding-website",
        PG_USER: PG_USER || "postgres",
        PG_PASSWORD: PG_PASSWORD || "postgres",
    },
};
