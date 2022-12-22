const router = require("express").Router();
const folders = require("./resources/FolderResource");

router.get("/", (_req, res) =>
  res.send({ message: "Welcome to Alga Ideas Catalog 3D API" })
);

folders(router);

module.exports = (app) => {
  app.use("/api/v1", router);
};
