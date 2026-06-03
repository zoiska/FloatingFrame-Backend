const db = require("../db/db");

// returns all computers
exports.getAllComputers = async () => {
  const result = await db.query("SELECT * FROM computers");
  return result.rows;
};

// returns a single computer with id = <number>
exports.getSingleComputers = async (id) => {
  const result = await db.query("SELECT * FROM computers WHERE id = $1", [id]);
  return result.rows[0];
};
