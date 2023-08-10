import { Sequelize } from "sequelize";

export interface DatabaseInterface {
    sequelize: Sequelize,
    initialiseConnection: () => void;
}