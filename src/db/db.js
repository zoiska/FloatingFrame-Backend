// Load .env
require("dotenv").config();

console.log("--- CURRENT CONFIG ---");
console.log("DB Config used:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("----------------------");

// Import pool for postgres
const { Pool } = require("pg");

// Create pool for multiple connections with credentials
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test connection to DB and display success or failiure in the consolelele
async function testConnection() {
  try {
    const result = await pool.query("SELECT 1");
    console.log("DB connected!");
  } catch (err) {
    console.error("DB connection failed:", err.message);
  }
}

testConnection()

module.exports = pool;
