import BlockModel from "../models/block";
import converter from "hex2dec";

class BlockAdapter {
  async findAll(query = {}) {
    const result = await BlockModel.findAll(query);
    return result.map(block => block.dataValues.blockNumber);
  }
  async findLast() {
    const result = await BlockModel.findOne({ order: [["id", "DESC"]] });
    const blockNumber: number | null = result?.dataValues?.blockNumber
      ? Number(converter.hexToDec(result?.dataValues?.blockNumber))
      : null;
    return blockNumber;
  }
}

export const blockAdapter = new BlockAdapter();
