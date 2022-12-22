import { http } from "../../http";

export default class ItemProviderApi {
  constructor() {
    this.http = http;
    this.route = "models";
  }

  async create(item) {
    return await this.http.post(`${this.route}`, item);
  }

  getAll({ page, limit, path, filters }) {
    filters = filters.map((e) => e.name).join("-");
    return this.http
      .get(
        `${this.route}?page=${page}&limit=${limit}&&path=${path}&&filters=${filters}`
      )
      .then(({ data }) => data);
  }
}
