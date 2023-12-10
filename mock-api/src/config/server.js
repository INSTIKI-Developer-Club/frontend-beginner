const cors = require("cors");
const clone = require("clone");
const helmet = require("helmet");
const jsonServer = require("json-server");
const compression = require("compression");

const { localTime } = require("../helpers");
const { apiRequestLimit } = require("./rateLimit");

const data = require("../data/db.json");

const app = jsonServer.create();
const router = jsonServer.router(clone(data), { _isFake: true });

app.use(cors());
app.use(compression());
app.use(helmet());

app.get("/", apiRequestLimit, (req, res) => {
  return res.json({
    code: 200,
    status: "Success",
    apiVersion: "1.0.0",
    current_time: localTime(),
    message: "Welcome to mock API - FrontEnd Beginner INSTIKI",
  });
});

app.use(apiRequestLimit, (req, res, next) => {
  if (req.path === "/") return next();
  router.db.setState(clone(data));
  next();
});

app.use(
  jsonServer.defaults({
    logger: process.env.NODE_ENV !== "production",
  })
);

app.use(router);

module.exports = app;
