import express from "express";
import { RoutesInterface } from "./interfaces/routes";
import Database from "./db";
import { DatabaseInterface } from "./interfaces/database";

class App {
  private app: express.Application;
  private port = process.env.EXPRESS_PORT || 3041;
  private db: DatabaseInterface;

  constructor() {
    this.app = express();
    this.db = Database;
  }

  async initialiseConnectionToDb() {
    try {
      this.db.initialiseConnection();
      await this.db.sequelize.authenticate()
      console.log('Connection to database estabilished successfully')
    } catch (error) {
      console.log('errror while connecting to db', error);
    }
  }

  initialiseRoutes(routes: RoutesInterface[]) {
    routes.forEach((route) => this.app.use("/", route.router));
  }

  initialiseModels() {
    this.db.initialiseModels();
    console.log('Models initialised successfully');
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server started on port", this.port);
    });
  }
}

export default App;
