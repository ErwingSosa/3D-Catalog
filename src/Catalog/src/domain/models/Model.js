module.exports = class Model {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  Model3D(model3D) {
    this.model3D = model3D;
    return this;
  }

  Image(image) {
    this.Image = image;
    return this;
  }

  Resources(resources) {
    this.resources = resources;
    return this;
  }
};
