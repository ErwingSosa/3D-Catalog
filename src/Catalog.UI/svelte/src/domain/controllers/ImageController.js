import ImageProvider from "../../interfaces/data/api/ImageProvider";

export default class ImageController {
  constructor() {
    this.provider = new ImageProvider();
  }

  async upload(image) {
    await this.provider.upload(image);
  }
}
