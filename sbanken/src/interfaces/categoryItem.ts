import { transactionCategory } from '../enums/transactionCategory';
import { TransactionItem } from './transactionItem';

export interface categoryItem {
    category: transactionCategory;
    color: string;
    count: number;
    amountIn: number;
    amountOut: number;
    amount: number;
    transactions: TransactionItem[];
}
