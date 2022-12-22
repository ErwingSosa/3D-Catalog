const { DataTypes } = require("sequelize");

module.exports = (database) => {
  const Model = require("./entities/ModelEntity");
  const Folder = require("./entities/FolderEntity");

  const db = {
    Model,
    Folder,
  };

  Object.keys(db).forEach((model) => {
    db[model] = db[model](database, DataTypes);
  });

  Object.keys(db).forEach((model) => {
    try {
      if ("associate" in db[model]) {
        db[model].associate(db);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  });
};
