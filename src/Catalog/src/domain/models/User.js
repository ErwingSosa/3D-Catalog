module.exports = class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.status = true;
  }

  Name(name) {
    this.name = name;
    return this;
  }

  Password(password) {
    this.password = password;
    return this;
  }

  //   Metodos
  deactivate() {
    this.status = false;
  }

  activate() {
    this.status = true;
  }
};
