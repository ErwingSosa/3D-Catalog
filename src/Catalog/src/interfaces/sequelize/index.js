const { Sequelize, Op } = require("sequelize");
const { database, username, password, host } = require("./config");

const models = require("./models");
const connection = new Sequelize(database, username, password, {
  host,
  operatorsAliases: {
    $or: Op.or,
    $substring: Op.substring,
    $like: Op.like,
    $and: Op.and,
    $not: Op.not,
  },
  logging: false,
  dialect: "mssql",
});

class Database {
  constructor() {
    this.instance = connection;
    this.setup();
  }

  setup() {
    models(this.instance);
  }

  async connection() {
    try {
      await this.instance.sync({ force: false });
      await this.instance.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = new Database();
