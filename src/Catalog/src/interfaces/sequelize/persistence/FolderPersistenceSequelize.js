const database = require("..");
const { Op } = require("sequelize");

class FolderPersistenceSequelize {
  constructor() {
    this.model = database.instance.model("Folder");
  }

  async create(folder) {
    console.log(folder);
    // const exist = await this.model.findOne({
    //   where: {
    //     path: item.path,
    //     name: item.name,
    //   },
    // });

    // if (exist) {
    //   throw new Error("Carpeta ya existente!");
    // }

    // await this.model.create(item);
  }

  async getAll(path = "/") {
    return await this.model.findAll({
      where: { path },
      order: [["name", "ASC"]],
    });
  }

  async get(id) {
    const exist = await this.model.findOne({ where: { id } });
    if (!exist) {
      throw new Error("Carpeta no encontrada");
    }
    return exist;
  }

  async delete(id) {
    const exist = await this.model.findOne({ where: { id } });
    if (!exist) {
      throw new Error("Carpeta no encontrada");
    }

    const childrens = await this.model.findAll({
      where: {
        path: { [Op.like]: `${exist.path}${exist.name}%` },
      },
    });

    const models = await childrens.reduce(async (acc, child) => {
      const exist = await child.getModels();
      return exist.length + (await acc);
    }, 0);

    if (models && models > 0) {
      throw new Error(
        "La carpeta no se puede eliminar porque contiene elementos"
      );
    }

    if (childrens && childrens.length > 0) {
      throw new Error(
        "La carpeta no se puede eliminar porque contiene subcategorias"
      );
    }

    await this.model.destroy({ where: { id } });
  }
}

module.exports = FolderPersistenceSequelize;
