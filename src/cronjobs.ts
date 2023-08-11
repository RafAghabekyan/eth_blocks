import dotenv from 'dotenv'
import cron from "node-cron";
import database from "./db";
import { saveTransactions } from "./cronjobs/saveTransactions";

dotenv.config()

async function main() {
  try {
    console.log(process.env.DATABASE_URL)
    await database.initialiseConnection();
    console.log("Connection with DB initialised");
    await database.initialiseModels();
    console.log("DB models initialised");
    // SAVE TRANSACTIONS OF LAST 100 blocks every minute
    saveTransactions();
    // cron.schedule("* * * * *", () => {
    //   saveTransactions();
    // });
  } catch (error) {
    console.log("Error occured while runing cronjobs: ", error);
  }
}

main();
