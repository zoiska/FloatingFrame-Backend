const db = require("../db/db");

// returns all switches
exports.getAllSwitches = async () => {
  const result = await db.query("SELECT * FROM switches");
  return result.rows;
};

// returns a single switch by id
exports.getSwitches = async (id) => {
  const result = await db.query("SELECT * FROM switches WHERE id = $1", [id]);
  return result.rows[0];
};

// create a single switch
exports.createSwitches = async (data) => {
  const result = await db.query(
    `INSERT INTO switches 
    (hostname,port,room,qr_code_id)
    VALUES ($1,$2,$3,$4)
    RETURNING *`,
    [data.hostname, data.port, data.room, data.qr_code_id],
  );

  return result.rows[0];
};

// update a switch by id
exports.updateSwitch = async (id, data) => {
  const result = await db.query(
    `UPDATE switches
     SET hostname = $1,
         port = $2,
         room = $3,
         qr_code_id = $4
     WHERE id = $5
     RETURNING *`,
    [data.hostname, data.port, data.room, data.qr_code_id, id],
  );

  return result.rows[0];
};

// delete a switch by id
exports.deleteSwitch = async (id) => {
  const result = await db.query(
    `DELETE FROM switches
     WHERE id = $1
     RETURNING *`,
    [id],
  );

  return result.rows[0];
};
