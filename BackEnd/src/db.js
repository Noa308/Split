const pg = require("pg");
const { Client } = pg;
const client = new Client({
  user: "postgres",
  password: "postgres",
  port: 5432,
  database: "split",
  host: "localhost",
});
exports.connect = async () => {
  await client.connect();
};

exports.client = client;
