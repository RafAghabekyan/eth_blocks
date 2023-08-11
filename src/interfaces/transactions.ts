import { Optional } from "sequelize";

export interface TransactionAttributes {
    id: number;
    blockNumber: number;
    from: string;
    to: string;
    value: string;
}
export interface TransactionInput extends Optional<TransactionAttributes, 'id'> {}
export interface TransactionOuput extends TransactionAttributes {}