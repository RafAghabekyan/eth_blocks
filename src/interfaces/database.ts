import { Model, Sequelize } from "sequelize";

export interface DatabaseInterface {
    sequelize: Sequelize,
    models: any[];
    initialiseConnection: () => void;
    initialiseModels: () => void
}