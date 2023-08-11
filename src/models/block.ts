import { DataTypes, Model } from "sequelize";
import { BlockAttributes, BlockInput } from "../interfaces/block";
import database from "../db";

class BlockModel extends Model<BlockAttributes, BlockInput> {
  public blockNumber: string;
  public static initialise() {
    BlockModel.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        blockNumber: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      { sequelize: database.sequelize, modelName: "BlockModel" }
    );
  }
}

export default BlockModel;
