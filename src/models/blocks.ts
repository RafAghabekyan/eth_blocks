import { pl } from "../db";
import { BlockColumnsInterface, BlockInterface } from "../interfaces/block";
import { ModelInterface } from "../interfaces/model";

class BlockModel implements ModelInterface<BlockColumnsInterface> {
  public tableName = "blocks";
  public columnNames: BlockColumnsInterface = {
    blockNumber: "blockNumber",
  };

  async insert(data: BlockInterface) {
    const columnNames: string = Object.keys(data).join();
    // const values: string = Object.values(data).join();
    // console.log(
    //   `INSERT INTO ${this.tableName}(${columnNames}) VALUES (${values})`
    // );
    // const result = await pl.query(`INSERT INTO ${this.tableName}(${columnNames}) VALUES (${values})`)
  }
}

export const blockModel = new BlockModel();
