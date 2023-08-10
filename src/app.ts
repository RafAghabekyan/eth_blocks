import express from 'express';
import { RoutesInterface } from './interfaces/routes';
import Database from './db';
import { DatabaseInterface } from './interfaces/database';

class App {
  private app: express.Application;
  private port = process.env.EXPRESS_PORT || 3041;
  private db: DatabaseInterface;

  constructor(routes: RoutesInterface[]) {
    this.app = express();
    this.db = Database;
    this.db.initialiseConnection();
    this.initialiseRoutes(routes);
  }

  initialiseRoutes(routes: RoutesInterface[]) {
    routes.map(route => this.app.use('/', route.router))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server started on port', this.port);
    });
  }
}

export default App;