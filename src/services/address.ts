import converter from "hex2dec";
import { Op } from "sequelize";
import { blockAdapter } from "../adapters/block";
import { transactionAdapter } from "../adapters/transactions";
import { ACCOUNT_LIMIT } from "../constants";

class AddressService {
  async getHighestBalanceAddress() {
    let highestAccount = null;
    const accounts = {};
    const blocks = await blockAdapter.findAll({
      limit: ACCOUNT_LIMIT,
      order: [["id", "DESC"]],
    });
    const transactions = await transactionAdapter.findAll({
      where: {
        [Op.or]: blocks.map((block) => ({
          blockNumber: block,
        })),
      },
    });
    transactions.forEach((transaction) => {
      const value: number = Number(converter.hexToDec(transaction.value));
      accounts[transaction.to] = accounts[transaction.to] ? accounts[transaction.to] + value : value; 
      accounts[transaction.from] = accounts[transaction.from] ? accounts[transaction.from] - value : -value; 
    });
    for(let account in accounts) {
      if(!highestAccount || accounts[account] > accounts[highestAccount]) {
        highestAccount = account;
      }
    }
    return highestAccount;
  }
}

export default AddressService;
