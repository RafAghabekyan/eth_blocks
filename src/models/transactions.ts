import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import database from "../db";
import BlockModel from "./block";

class TransactionModel extends Model<
  InferAttributes<TransactionModel>,
  InferCreationAttributes<TransactionModel>
> {
  declare id: CreationOptional<number>;
  declare blockNumber: string;
  declare to: string;
  declare from: string;
  declare value: string;
  public static initialise() {
    TransactionModel.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        blockNumber: {
          type: DataTypes.STRING,
          references: {
            model: BlockModel,
            key: "blockNumber",
          },
        },
        to: {
          type: DataTypes.STRING,
        },
        from: {
          type: DataTypes.STRING,
        },
        value: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize: database.sequelize,
        modelName: "transactions",
        timestamps: false,
      }
    );
  }
}

export default TransactionModel;
