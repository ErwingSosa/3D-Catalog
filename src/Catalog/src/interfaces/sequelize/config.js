require("dotenv").config();

module.exports = {
  database: process.env.DATABASE || "database",
  username: process.env.DB_USER || "root",
  password: process.env.PASSWORD || "password",
  host: process.env.HOST || "localhost",
};
