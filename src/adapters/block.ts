import BlockModel from "../models/block"
import converter from "hex2dec";

class BlockAdapter {
    async findLast() {
        const { dataValues } = await BlockModel.findOne({ order: [["id", "DESC"]] })
        const blockNumber: number = Number(converter.hexToDec(dataValues.blockNumber))
        return blockNumber;
    }
}

export const blockAdapter = new BlockAdapter()