import axios from 'axios';
import converter from 'hex2dec';
import { FIRST_BLOCK } from '../../constants';
import { blockModel } from '../../models/blocks';

async function saveTransactions() {
    const { data } = await axios.get('https://api.etherscan.io/api?module=proxy&action=eth_blockNumber');
    const lastBlock: number = Number(converter.hexToDec(data.result));
    for(let i = FIRST_BLOCK; i < lastBlock; i++) {
        const tag: string = converter.decToHex(String(i));
        const { data } = await axios.get(`https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${tag}&boolean=true`)
        // blockModel.insert(blockModel.columnNames.blockNumber)
    }
}

export {
    saveTransactions,
}