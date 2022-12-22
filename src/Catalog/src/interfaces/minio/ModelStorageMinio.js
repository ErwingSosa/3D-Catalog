const { minioClient } = require("./");

module.exports = class ModelStorageMinio {
  upload(model) {
    if (!model) throw new Error("No Model");
    // if (image.mimetype.split("/")[0] != "image") {
    //   throw new Error(`El archivo no es una imagen`);
    // }

    const { name, data, size } = model;
    minioClient.putObject("catalog-3d/models", name, data, size);
  }
};
