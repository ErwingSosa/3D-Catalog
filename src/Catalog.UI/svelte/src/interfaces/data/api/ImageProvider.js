import { http } from "../../http";

export default class FilterProvider {
  constructor() {
    this.http = http;
    this.route = "images";
  }

  async upload(image) {
    return await this.http.post(`${this.route}`, image);
  }
}
