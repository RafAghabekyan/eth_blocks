import TransactionModel from "../models/transactions";

class TransactionAdapter {
  async findAll(query = {}) {
    const result = await TransactionModel.findAll(query);
    return result.map(block => block.dataValues);
  }
}

export const transactionAdapter = new TransactionAdapter();
