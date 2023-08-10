// import { Pool } from "pg";
import { DatabaseInterface } from "./interfaces/database";
import { Sequelize } from 'sequelize'
class Database implements DatabaseInterface{
  public sequelize: Sequelize;

  initialiseConnection() {
    this.sequelize = new Sequelize(process.env.DATABASE_URL);
  }
}

const database = new Database();

export const sequelize = database.sequelize;
export default database;