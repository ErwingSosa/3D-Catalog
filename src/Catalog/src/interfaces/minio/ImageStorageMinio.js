const { minioClient } = require("./");

module.exports = class ImageStorageMinio {
  upload(image) {
    if (!image) throw new Error("No image");
    if (image.mimetype.split("/")[0] != "image") {
      throw new Error(`El archivo no es una imagen`);
    }

    const { name, data, size } = image;
    minioClient.putObject("catalog-3d/images", name, data, size);
  }
};
