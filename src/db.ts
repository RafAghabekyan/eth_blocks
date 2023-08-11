import { DatabaseInterface } from "./interfaces/database";
import { Sequelize } from 'sequelize'
import BlockModel from "./models/block";
class Database implements DatabaseInterface {
  public sequelize: Sequelize;
  public models;

  constructor() {
    this.models = [
      BlockModel,
    ]
  }

  async initialiseConnection() {
    this.sequelize = new Sequelize(process.env.DATABASE_URL);
  }

  async initialiseModels() {
    this.models.forEach(model => {
      model.initialise();
    });
  }
}

const database = new Database();

export default database;