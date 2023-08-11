import { DataTypes, Model } from "sequelize";
import {
  TransactionAttributes,
  TransactionInput,
} from "../interfaces/transactions";
import database from "../db";
import BlockModel from "./block";

class TransactionModel extends Model<TransactionAttributes, TransactionInput> {
  public blockNumber: string;
}

TransactionModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    blockNumber: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: BlockModel,
        key: "id",
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
  { sequelize: database.sequelize, modelName: "TransactionModel" }
);

export default TransactionModel;
