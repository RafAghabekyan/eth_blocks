import { pl } from "../db";
import { ModelInterface } from "../interfaces/model";

interface ColumnNamesInterface {
    blockNumber: string;
}

interface BlockInterface {
    blockNumber?: string
}

class BlockModel implements ModelInterface<ColumnNamesInterface>{
    public tableName = 'blocks'
    public columnNames: ColumnNamesInterface = {
        blockNumber: 'blockNumber'
    }

    async insert(data: BlockInterface) {
        // const columnNames = 
        // const result = await pl.query(`INSERT INTO ${this.tableName}(${columnNames}) VALUES (${values})`)
        // console.log('aaaaaaaaaaaa', result);
    }
}

export const blockModel = new BlockModel();