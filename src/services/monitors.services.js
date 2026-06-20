const db = require("../db/db");

// returns all monitors
exports.getAllMonitors = async () => {
  const result = await db.query("SELECT * FROM monitors");
  return result.rows;
};

// returns a single monitor by id
exports.getMonitors = async (id) => {
  const result = await db.query("SELECT * FROM monitors WHERE id = $1", [id]);
  return result.rows[0];
};

// create a single monitor
exports.createMonitors = async (data) => {
  const result = await db.query(
    `INSERT INTO monitors 
    (manufacturer, screen_diagonal,screen_resolution,refresh_rate, qr_code_id)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *`,
    [
      data.manufacturer,
      data.screen_diagonal,
      data.screen_resolution,
      data.refresh_rate,
      data.qr_code_id,
    ],
  );

  return result.rows[0];
};

// Update a single monitor
exports.updateMonitors = async (id, data) => {
  const result = await db.query(
    `UPDATE monitors
     SET  manufacturer = $1,
          screen_diagonal = $2,
          screen_resolution = $3,
          refresh_rate = $4,
          qr_code_id = $5
    WHERE id = $6
     RETURNING *`,
    [
      data.manufacturer,
      data.screen_diagonal,
      data.screen_resolution,
      data.refresh_rate,
      data.qr_code_id,
      id,
    ],
  );

  return result.rows[0];
};

// delete a monitor by id
exports.deleteMonitor = async (id) => {
  const result = await db.query(
    `DELETE FROM monitors
     WHERE id = $1
     RETURNING *`,
    [id],
  );

  return result.rows[0];
};
