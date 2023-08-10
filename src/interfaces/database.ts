import { Pool } from "pg";

export interface DatabaseInterface {
    pl: Pool,
    initialiseConnection: () => void;
}