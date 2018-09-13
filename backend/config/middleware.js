const bodyParser = require("body-parser");
const uploadFile = require("./s3");

module.exports = (app, express) => {
  const appRouter = express.Router();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(__dirname));

  const appUrl = "/api";

  appRouter.get("/upload-file", uploadFile);
  appRouter.get("/", (req, res) =>
    res.status(200).send("Welcome! this is my api :D")
  );

  app.use(appUrl, appRouter);

  return app;
};
