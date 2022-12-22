import { http } from "../../http";

export default class FolderProvider {
  constructor() {
    this.http = http;
    this.route = "folders";
  }

  async create(category) {
    return await this.http.post(`${this.route}`, category);
  }

  async getAll({ path }) {
    return await this.http
      .get(`${this.route}?path=${path}`)
      .then(({ data }) => data);
  }

  async delete(id) {
    return await this.http.delete(`${this.route}/${id}`);
  }
}
