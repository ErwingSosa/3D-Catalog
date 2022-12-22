const router = require("express").Router();
const Controller = require("../../../domain/controllers/FolderController");
const Persistence = require("../../../interfaces/sequelize/persistence/FolderPersistenceSequelize");
const controller = new Controller(new Persistence());

const { sendSuccessCreated } = require("../responses");

// Create
router.post("/", async (req, res) => {
  try {
    await controller.create(req.body);
    res.status(200).send("Carpeta creada");
    // sendSuccessCreated(res)(req.body);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all categories
router.get("/", async (req, res) => {
  try {
    // const folders = await controller.getAll(req.query.path);
    // throw new Error("Error de comnunicacion")
    res.status(200).send("hola");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get
router.get("/:id", async (req, res) => {
  try {
    const folder = await controller.get(req.params.id);
    res.status(200).send(folder);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await controller.update();
  } catch (error) {
    res.status(400).send(err.message);
  }
});

// Delete Folder
router.delete("/:id", async (req, res) => {
  try {
    await controller.delete(req.params.id);
    res.status(200).send("Carpeta eliminada");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = (app) => {
  app.use("/folders", router);
};
