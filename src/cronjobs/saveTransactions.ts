import axios from "axios";
import converter from "hex2dec";
import { FIRST_BLOCK } from "../constants";
import BlockModel from "../models/block";
import { blockAdapter } from "../adapters/block";
import TransactionModel from "../models/transactions";
import { BlockInterface } from "../interfaces/block";
import { TransactionInterface } from "../interfaces/transaction";

async function saveTransactions() {
  try {
    const blocks: BlockInterface[] = [];
    const transactions: TransactionInterface[] = [];
    const { data } = await axios.get(
      "https://api.etherscan.io/api?module=proxy&action=eth_blockNumber"
    );
    const lastBlock: number = Number(converter.hexToDec(data.result));
    let lastBlockInDB: number | null = await blockAdapter.findLast();
    for (let i = lastBlockInDB || FIRST_BLOCK; i < lastBlock; i++) {
      const currentBlock: string = converter.decToHex(String(i+1));
      const { data } = await axios.get(
        `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${currentBlock}&boolean=true`
      );
      blocks.push({ blockNumber: currentBlock });
      if (data?.result?.transactions) {
        data?.result?.transactions.forEach((transaction: any) => {
          transaction.blockNumber &&
            transaction.to &&
            transaction.from &&
            transaction.value &&
            transactions.push({
              blockNumber: transaction.blockNumber,
              to: transaction.to,
              from: transaction.from,
              value: transaction.value,
            });
        });
      }
    }
    await BlockModel.bulkCreate(blocks);
    await TransactionModel.bulkCreate(transactions);
  } catch (error) {
    console.error('Error occured while saving data of blocks', error);
  }
}

export { saveTransactions };
