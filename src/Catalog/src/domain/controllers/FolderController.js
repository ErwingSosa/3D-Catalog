const ControllerBase = require("./ControllerBase");

class FolderController extends ControllerBase {
  async create(folder) {
    await this.persistence.create(folder);
  }

  async getAll(path) {
    return await this.persistence.getAll(path);
  }

  async get(id) {
    return await this.persistence.get(id);
  }

  async delete(id) {
    return await this.persistence.delete(id);
  }
}

module.exports = FolderController;
