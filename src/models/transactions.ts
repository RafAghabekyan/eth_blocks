import { ModelInterface } from "../interfaces/model";
import { TransactionsColumnsInterface, TransactionsInterface } from "../interfaces/transactions";

class TransactionModel implements ModelInterface<TransactionsColumnsInterface> {
  tableName = "transactions";
  columnNames: TransactionsColumnsInterface = {
    id: "id",
    blockNumber: "blockNumber",
    from: "from",
    to: "to",
    value: "value",
  };

  async insert(data: TransactionsInterface[]) {
    const columnNames: string = Object.keys(this.columnNames).join();
    let values: string;
    // data.forEach(d => )
    console.log(
      `INSERT INTO ${this.tableName}(${columnNames}) VALUES`
    );
    // const result = await pl.query(`INSERT INTO ${this.tableName}(${columnNames}) VALUES (${values})`)
  }
}

export const transactionsModel = new TransactionModel();
