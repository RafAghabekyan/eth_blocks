import App from './app';
import dotenv from 'dotenv';
import Address from './routes/address';

dotenv.config()

async function main() {
  const app = new App()
  await app.initialiseConnectionToDb()
  app.initialiseModels();
  app.initialiseRoutes([
    new Address()
  ])
  app.listen()
}

main();