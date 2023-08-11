import { Model, Sequelize } from "sequelize";

export interface DatabaseInterface {
    sequelize: Sequelize,
    initialiseConnection: () => void;
    initialiseModels: () => void
}