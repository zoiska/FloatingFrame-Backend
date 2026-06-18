const db = require("../db/db");

// returns all computers
exports.getAllComputers = async () => {
  const result = await db.query("SELECT * FROM computers");
  return result.rows;
};

// returns a single computer by id
exports.getComputers = async (id) => {
  const result = await db.query("SELECT * FROM computers WHERE id = $1", [id]);
  return result.rows[0];
};

// create a single computer
exports.createComputers = async (data) => {
  const result = await db.query(
    `INSERT INTO computers 
    (manufacturer, hostname, ip_address, mac_address, cpu_name, ram_size, storage_size, qr_code_id)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    RETURNING *`,
    [
      data.manufacturer,
      data.hostname,
      data.ip_address,
      data.mac_address,
      data.cpu_name,
      data.ram_size,
      data.storage_size,
      data.qr_code_id,
    ],
  );

  return result.rows[0];
};

// update a computer by id
exports.updateComputer = async (id, data) => {
  const result = await db.query(
    `UPDATE computers
     SET manufacturer = $1,
         hostname = $2,
         ip_address = $3,
         mac_address = $4,
         cpu_name = $5,
         ram_size = $6,
         storage_size = $7,
         qr_code_id = $8
     WHERE id = $9
     RETURNING *`,
    [
      data.manufacturer,
      data.hostname,
      data.ip_address,
      data.mac_address,
      data.cpu_name,
      data.ram_size,
      data.storage_size,
      data.qr_code_id,
      id,
    ],
  );

  return result.rows[0];
};

// delete a computer by id
exports.deleteComputer = async (id) => {
  const result = await db.query(
    `DELETE FROM computers
     WHERE id = $1
     RETURNING *`,
    [id],
  );

  return result.rows[0];
};
