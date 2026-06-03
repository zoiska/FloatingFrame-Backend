const db = require("../db/db");

// returns all QR-Codes
exports.getAllQR = async () => {
  const result = await db.query("SELECT * FROM qr_codes");
  return result.rows;
};

// returns a single QR-Code with id = <number>
exports.getSingleQR = async (id) => {
  const result = await db.query("SELECT * FROM qr_codes WHERE id = $1", [id]);
  return result.rows[0];
};
