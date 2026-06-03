const db = require("../db/db");

// returns all switches
exports.getAllSwitches = async () => {
  const result = await db.query("SELECT * FROM switches");
  return result.rows;
};

// returns a single switch with id = <number>
exports.getSingleSwitches = async (id) => {
  const result = await db.query("SELECT * FROM switches WHERE id = $1", [id]);
  return result.rows[0];
};
