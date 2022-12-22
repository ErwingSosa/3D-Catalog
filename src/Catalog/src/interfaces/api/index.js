const express = require("express");
const server = express();
const app = require("./app");
const { port } = require("./config");
const database = require("../sequelize/index");

async function main() {
  await database.connection();
  app(server);

  server
    .listen(port, () => {
      console.log(`Server listening on port ${port}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit(500);
    });
}

main();
