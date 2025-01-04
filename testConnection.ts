import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

// Load environment variables
config();

(async () => {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("DATABASE_URL is not defined!");
    return;
  }

  const sql = neon(databaseUrl);

  try {
    const result = await sql`SELECT 1;`;
    console.log("Database connection successful:", result);
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();
