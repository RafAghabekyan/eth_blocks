import { Optional } from "sequelize";

export interface BlockAttributes {
    id: number;
    blockNumber: string;
}
export interface BlockInput extends Optional<BlockAttributes, 'id'> {}
export interface BlockOuput extends BlockAttributes {}