/** @format */

import { createConnection } from "mysql2/promise";

async function DB_CONN() {
  const CONNECTION = await createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  return CONNECTION;
}

export default DB_CONN;
