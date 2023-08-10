export interface TransactionsColumnsInterface {
    id: 'id';
    blockNumber: 'blockNumber';
    from: 'from';
    to: 'to';
    value: 'value';
};

export interface TransactionsInterface {
    blockNumber: string;
    from: string;
    to: string;
    value: string;
}