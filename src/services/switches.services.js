const db = require("../db/db");

exports.getAllSwitches = async () => {
  const result = await db.query("SELECT * FROM switches");
  return result.rows;
};
