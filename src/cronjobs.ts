import dotenv from 'dotenv'
import cron from "node-cron";
import database from "./db";
import { saveTransactions } from "./cronjobs/saveTransactions";

dotenv.config()

async function main() {
  try {
    await database.initialiseConnection();
    console.log("Connection with DB initialised");
    await database.initialiseModels();
    console.log("DB models initialised");
    // SAVE TRANSACTIONS OF LAST 100 blocks every minute
    cron.schedule("* * * * *", async () => {
      console.log('CRON FOR SAVING TRANSACTIONS STARTED!!!')
      await saveTransactions();
      console.log('CRON FOR SAVING TRANSACTIONS FINISHED!!!')
    });
  } catch (error) {
    console.error("Error occured while runing cronjobs: ", error);
  }
}

main();
