// import cron from "node-cron";
import { saveTransactions } from "./modules/saveTransactions";

saveTransactions();

// cron.schedule("* * * * *", () => {
//   saveTransactions();
// });
