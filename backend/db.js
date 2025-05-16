const sql = require('mssql');
require('dotenv').config();

const config = {
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DB,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

async function getPersonal() {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`
      SELECT 
        APELLIDOPATERNO,
        APELLIDOMATERNO,
        NOMBRE,
        PUESTO,
        PERSONAL,
        REGISTRO AS CURP,
        REGISTRO3 AS IMSS,
        ESTATUS
      FROM PERSONAL
      WHERE ESTATUS IN ('ALTA', 'ASPIRANTE')
    `);
    return result.recordset;
  } catch (err) {
    console.error("DB Error:", err);
    throw err;
  }
}

module.exports = { getPersonal };
