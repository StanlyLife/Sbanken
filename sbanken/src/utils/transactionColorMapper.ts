import { transactionCategory } from './../enums/transactionCategory';

const colors = {
    food: '#fad390',
    unknown: '#6a89cc',
    recreation: '#f8c291',
    transport: '#f6b93b',
    games: '#60a3bc',
    learing: '#b8e994',
    vipps: '#e55039',
    undefined: '#a4b0be',
};

export const TransactionColorMapper = (category: transactionCategory) => {
    return colors[transactionCategory[category]];
};
