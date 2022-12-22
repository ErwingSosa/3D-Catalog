import FolderProvider from "../../interfaces/data/api/FolderProvider";

export default class FolderController {
  constructor() {
    this.provider = new FolderProvider();
  }

  async create(folder) {
    return await this.provider.create(folder);
  }

  async getAll(params) {
    return this.provider.getAll(params);
  }

  async delete(id) {
    return this.provider.delete(id);
  }
}
