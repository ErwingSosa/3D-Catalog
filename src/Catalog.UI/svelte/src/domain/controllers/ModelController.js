import Provider from "../../interfaces/data/api/ModelProviderApi";

export default class ModelController {
  constructor() {
    this.provider = new Provider();
  }

  async create(model) {
    return await this.provider.create(model);
  }

  getAll(params) {
    return this.provider.getAll(params);
  }
}
