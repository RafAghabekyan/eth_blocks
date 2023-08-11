import axios from "axios";
import converter from "hex2dec";
import { FIRST_BLOCK } from "../constants";
import BlockModel from "../models/block";
import { blockAdapter } from "../adapters/block";

async function saveTransactions() {
  const blocks = [];
  const { data } = await axios.get(
    "https://api.etherscan.io/api?module=proxy&action=eth_blockNumber"
  );
  const lastBlock: number = Number(converter.hexToDec(data.result));
  const lastBlockInDB = await blockAdapter.findLast()
  for (let i = lastBlockInDB || FIRST_BLOCK; i < lastBlock; i++) {
    const currentBlock: string = converter.decToHex(String(i));
    const { data } = await axios.get(
      `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${currentBlock}&boolean=true`
    );
    data?.result?.transactions && blocks.push({ blockNumber: i });
  }
  await BlockModel.bulkCreate(blocks);
  console.log("FINISHED CRON");
}

export { saveTransactions };
