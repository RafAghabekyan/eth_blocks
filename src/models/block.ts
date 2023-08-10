import { DataTypes, Model } from "sequelize";
import { BlockAttributes, BlockInput } from "../interfaces/block";
import { sequelize } from "../db";

class BlockModel extends Model<BlockAttributes, BlockInput> {
  public blockNumber: string;
}

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
  { sequelize, modelName: "BlockModel" }
);

export default BlockModel;