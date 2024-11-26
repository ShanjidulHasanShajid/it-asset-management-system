// File: src/lib/db.ts
import oracledb from "oracledb";

// Database configuration
const dbConfig = {
  user: "ITIL",
  password: "itil",
  connectString: "DESKTOP-IBUIE1E:1521/SHS",
};

// Ensure proper initialization of Oracle client
try {
  oracledb.initOracleClient();
} catch (err) {
  console.error("Error initializing Oracle client:", err);
}

// Configure oracledb for performance and compatibility
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// Function to get a database connection
export async function getConnection() {
  try {
    return await oracledb.getConnection(dbConfig);
  } catch (err) {
    console.error("Error connecting to database:", err);
    throw err;
  }
}

// Close database connection
export async function closeConnection(connection: oracledb.Connection) {
  try {
    await connection.close();
  } catch (err) {
    console.error("Error closing database connection:", err);
  }
}
