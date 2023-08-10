import App from './app';
import dotenv from 'dotenv';
import Address from './routes/address';

dotenv.config()

const app = new App([
  new Address(),
]);

app.listen()