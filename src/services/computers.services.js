const db = require("../db/db");

exports.getAllComputers = async () => {
  const result = await db.query("SELECT * FROM computers");
  return result.rows;
};
