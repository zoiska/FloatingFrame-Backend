const db = require("../db/db");

exports.getAllMonitors = async () => {
  const result = await db.query("SELECT * FROM monitors");
  return result.rows;
};
