import axios from "axios";
import converter from "hex2dec";
import { FIRST_BLOCK } from "../../constants";
import BlockModel from "../../models/block";

async function saveTransactions() {
  try {
    const blocks = [];
    const { data } = await axios.get(
      "https://api.etherscan.io/api?module=proxy&action=eth_blockNumber"
    );
    const lastBlock: number = Number(converter.hexToDec(data.result));
    for (let i = FIRST_BLOCK; i < lastBlock; i++) {
      const tag: string = converter.decToHex(String(i));
      const { data } = await axios.get(
        `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${tag}&boolean=true`
      );
      data?.result?.transactions && blocks.push({ blockNumber: i });
      console.log(data.result.transactions);
      await BlockModel.bulkCreate(blocks);
    }
  } catch (err) {
    console.log("Error occured while saving data: ", err);
  }
}

export { saveTransactions };
