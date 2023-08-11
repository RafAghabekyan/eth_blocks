import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import database from "../db";

class BlockModel extends Model<
  InferAttributes<BlockModel>,
  InferCreationAttributes<BlockModel>
> {
  declare id: CreationOptional<number>;
  declare blockNumber: string;
  public static initialise() {
    BlockModel.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
        },
        blockNumber: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
          primaryKey: true,
        },
      },
      { sequelize: database.sequelize, modelName: "blocks", timestamps: false }
    );
  }
}

export default BlockModel;
