const db = require("../db/db");

// returns all QR-Codes
exports.getAllQR = async () => {
  const result = await db.query("SELECT * FROM qr_codes");
  return result.rows;
};

// returns the devices associated with the provided qr code
exports.getSingleQR = async (id) => {
  const result = await db.query("SELECT * FROM qr_codes WHERE id = $1", [id]);
  return result.rows[0];
};
