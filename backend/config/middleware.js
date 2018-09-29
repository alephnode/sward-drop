const bodyParser = require("body-parser");
const uploadFile = require("./s3");
const { createUser, loginUser } = require("./cognito");
const multiparty = require("connect-multiparty");
const multipartyMiddleware = multiparty();

module.exports = (app, express) => {
  const appRouter = express.Router();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname));

  const appUrl = "/api";

  appRouter.post("/upload-file", multipartyMiddleware, (req, res) =>
    uploadFile(req, res)
  );
  appRouter.post("/join", (req, res) => createUser(req, res));
  appRouter.post("/login", (req, res) => loginUser(req, res));
  appRouter.get("/", (req, res) =>
    res.status(200).send("Welcome! this is my api :D")
  );

  app.use(appUrl, appRouter);

  return app;
};
