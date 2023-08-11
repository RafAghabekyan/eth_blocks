import express, { IRouter } from "express";
import Database from "./db";
import { DatabaseInterface } from "./interfaces/database";
import routes from "./routes";

class App {
  private app: express.Application;
  private port = process.env.EXPRESS_PORT || 3041;
  private db: DatabaseInterface;
  private routes: IRouter[];

  constructor() {
    this.app = express();
    this.db = Database;
    this.routes = routes;
  }

  private async initDb() {
    try {
      this.db.initialiseConnection();
      await this.db.sequelize.authenticate();
      console.log("--------------------------");
      console.log("Connection to database estabilished successfully");
      console.log("--------------------------");
    } catch (error) {
      console.error("Error while connecting to db: ", error);
    }
  }

  private initRoutes() {
    try {
      this.routes.forEach((route) => this.app.use("/", route));
    } catch (error) {
      console.error("Error while initialising routes: ", error);
    }
  }

  private initModels() {
    try {
      this.db.initialiseModels();
    } catch (error) {
      console.error("Error while initialising models: ", error);
    }
  }

  private listen() {
    try {
      this.app.listen(this.port, () => {
        console.log("--------------------------");
        console.log("Server started on port", this.port);
        console.log("--------------------------");
      });
    } catch (error) {
      console.error("Error occured while starting server: ", error);
    }
  }

  public async start() {
    await this.initDb();
    this.initModels();
    this.initRoutes();
    this.listen();
  }
}

export default App;
