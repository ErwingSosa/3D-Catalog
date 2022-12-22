const ControllerBase = require("./ControllerBase");

module.exports = class ModelController extends ControllerBase {
  async create(model) {
    await this.persistence.create(model);
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
};
