const minio = require("minio");
const minioClient = new minio.Client({
  endPoint: "192.168.1.123",
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINIOKEY || "minioadmin",
  secretKey: "minioadmin",
});

module.exports = { minioClient };
