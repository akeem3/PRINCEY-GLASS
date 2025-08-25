const { Client } = require("pg");
require("dotenv").config();

// Note: The hostname in your connection string has a typo
// It should be: princeyglass-princeyglass-06b4.h.aivencloud.com
// Not: prinecyglass-princeyglass-06b4.h.aivencloud.com

async function testConnection() {
  console.log("🔍 Testing Aiven PostgreSQL Connection...\n");

  // Get connection string from environment
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.error("❌ DATABASE_URL not found in .env file");
    return;
  }

  console.log("📋 Connection String (masked):");
  console.log(connectionString.replace(/:[^:@]*@/, ":****@"));
  console.log("");

  const client = new Client({
    connectionString: connectionString,
    ssl: {
      rejectUnauthorized: false, // For development - allows self-signed certificates
    },
  });

  try {
    console.log("🔌 Attempting to connect...");
    await client.connect();
    console.log("✅ Connection successful!");

    // Test a simple query
    const result = await client.query("SELECT version()");
    console.log("📊 Database version:", result.rows[0].version);

    // Test if we can create a simple table (for testing)
    await client.query(`
      CREATE TABLE IF NOT EXISTS connection_test (
        id SERIAL PRIMARY KEY,
        test_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Test table created/verified");

    // Insert a test record
    await client.query(
      "INSERT INTO connection_test (test_time) VALUES (CURRENT_TIMESTAMP)"
    );
    console.log("✅ Test record inserted");

    // Query the test record
    const testResult = await client.query(
      "SELECT * FROM connection_test ORDER BY test_time DESC LIMIT 1"
    );
    console.log("📊 Latest test record:", testResult.rows[0]);

    console.log(
      "\n🎉 All tests passed! Database connection is working correctly."
    );
  } catch (error) {
    console.error("❌ Connection failed:");
    console.error("Error:", error.message);
    console.error("\n🔧 Troubleshooting tips:");
    console.error("1. Check if Aiven service is running");
    console.error("2. Verify IP allowlist in Aiven console");
    console.error("3. Ensure SSL configuration is correct");
    console.error("4. Check connection string format");
  } finally {
    await client.end();
  }
}

testConnection();
