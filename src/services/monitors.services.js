const db = require("../db/db");

// returns all monitors
exports.getAllMonitors = async () => {
  const result = await db.query("SELECT * FROM monitors");
  return result.rows;
};

// returns a single monitor with id = <number>
exports.getSingleMonitors = async (id) => {
  const result = await db.query("SELECT * FROM monitors WHERE id = $1", [id]);
  return result.rows[0];
};
