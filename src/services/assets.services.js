const db = require("../db/db");

// returns all Assets
exports.getAllAssets = async () => {
  const result = await db.query(`
    SELECT 
      'computer' AS type,
      hostname,
      ip_address,
      mac_address,
      cpu_name,
      ram_size,
      storage_size,
      NULL::integer AS screen_diagonal,
      NULL::text AS screen_resolution,
      NULL::integer AS refresh_rate,
      NULL::integer AS port,
      NULL::text AS room,
      qr_code_id
    FROM computers

    UNION ALL

    SELECT 
      'monitor' AS type,
      NULL::text AS hostname,
      NULL::inet AS ip_address,
      NULL::macaddr AS mac_address,
      NULL::text AS cpu_name,
      NULL::integer AS ram_size,
      NULL::integer AS storage_size,
      screen_diagonal,
      screen_resolution,
      refresh_rate,
      NULL::integer AS port,
      NULL::text AS room,
      qr_code_id
    FROM monitors

    UNION ALL

    SELECT 
      'switch' AS type,
      hostname,
      NULL::inet AS ip_address,
      NULL::macaddr AS mac_address,
      NULL::text AS cpu_name,
      NULL::integer AS ram_size,
      NULL::integer AS storage_size,
      NULL::integer AS screen_diagonal,
      NULL::text AS screen_resolution,
      NULL::integer AS refresh_rate,
      port,
      room,
      qr_code_id
    FROM switches

  `);

  return result.rows;
};

// returns a list of assets inside a room
exports.getAssetsByQR = async (id) => {
  const result = await db.query(
    `
    SELECT 
      'computer' AS type,
      hostname,
      ip_address,
      mac_address,
      cpu_name,
      ram_size,
      storage_size,
      NULL::integer AS screen_diagonal,
      NULL::text AS screen_resolution,
      NULL::integer AS refresh_rate,
      NULL::integer AS port,
      NULL::text AS room,
      qr_code_id
    FROM computers 
    WHERE qr_code_id = $1

    UNION ALL

    SELECT 
      'monitor' AS type,
      NULL::text AS hostname,
      NULL::inet AS ip_address,
      NULL::macaddr AS mac_address,
      NULL::text AS cpu_name,
      NULL::integer AS ram_size,
      NULL::integer AS storage_size,
      screen_diagonal,
      screen_resolution,
      refresh_rate,
      NULL::integer AS port,
      NULL::text AS room,
      qr_code_id
    FROM monitors
    WHERE qr_code_id = $1

    UNION ALL

    SELECT 
      'switch' AS type,
      hostname,
      NULL::inet AS ip_address,
      NULL::macaddr AS mac_address,
      NULL::text AS cpu_name,
      NULL::integer AS ram_size,
      NULL::integer AS storage_size,
      NULL::integer AS screen_diagonal,
      NULL::text AS screen_resolution,
      NULL::integer AS refresh_rate,
      port,
      room,
      qr_code_id
    FROM switches 
    WHERE qr_code_id = $1

  `,
    [id],
  );

  return result.rows;
};
