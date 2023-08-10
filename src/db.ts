import { Pool } from "pg";
import { DatabaseInterface } from "./interfaces/database";

class Database implements DatabaseInterface{
  public pl: Pool;

  initialiseConnection() {
    this.pl = new Pool({
      user: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      port: process.env.DATABASE_PORT as unknown as number,
      host: process.env.DATABASE_HOST,
    });
  }
}

const database = new Database();

export const pl = database.pl;
export default database;