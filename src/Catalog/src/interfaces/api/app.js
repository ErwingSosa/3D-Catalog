const bodyParser = require("body-parser");
const logger = require("morgan");
const router = require("./router");
const fileUpload = require("express-fileupload");

module.exports = (app) => {
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(fileUpload());
  router(app);
};
