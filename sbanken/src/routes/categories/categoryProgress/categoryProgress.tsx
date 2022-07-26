import { useEffect, useState } from 'react';
import { transactionCategory } from '../../../enums/transactionCategory';
import { TransactionItem, TransactionWithCategoryItem } from '../../../interfaces/transactionItem';
import { useApiStore } from '../../../stores/useApiStore';
import { TransactionCategoryMapper } from '../../../utils/transactionCategoryMapper';
import './categoryProgress.scss';

type categoryItems = {
    category: transactionCategory;
    color: string;
    count: number;
    amountIn: number;
    amountOut: number;
    amount: number;
};

export const CategoryProgress = () => {
    const { transactions_store } = useApiStore();
    const [transactions, setTransactions] = useState<TransactionItem[]>();
    useEffect(() => {
        setTransactions(transactions_store.items);
    }, [transactions_store]);
    useEffect(() => {
        if (!transactions) return;
        const newTransactions = getTransactionsWithCategories(transactions);
        const categorizedTransactions = getTransactionsGroupedInCategories(newTransactions);
        console.log(categorizedTransactions);
    }, [transactions]);
    return (
        <div className='category-process-component'>
            <h1>Category progress</h1>
        </div>
    );
};

const getTransactionsGroupedInCategories = (transactions: TransactionWithCategoryItem[]) => {
    //Return an array of categories calculated by transactions parameter
    const result = transactions.reduce((acc: categoryItems[], curr) => {
        const existingCategory = acc.filter((transaction) => transaction.category === curr.category)[0];
        if (existingCategory) {
            //Add curr to existing category
            existingCategory.amount += curr.amount;
            existingCategory.amountIn += curr.amount > 0 ? curr.amount : 0;
            existingCategory.amountOut += curr.amount < 0 ? curr.amount : 0;
            existingCategory.count++;
        } else {
            const categoryItem: categoryItems = {
                category: curr.category,
                color: 'temporary color',
                count: 1,
                amountIn: curr.amount > 0 ? curr.amount : 0,
                amountOut: curr.amount < 0 ? curr.amount : 0,
                amount: curr.amount,
            };
            acc.push(categoryItem);
        }
        return acc;
    }, []);
    return result.sort((a, b) => a.amount - b.amount);
};

const getTransactionsWithCategories = (transactions: TransactionItem[]) => {
    const result = transactions?.reduce((acc: TransactionWithCategoryItem[], curr) => {
        const merchantName = curr.cardDetails?.merchantName;
        const name = merchantName ? merchantName : curr.text;
        const category = TransactionCategoryMapper(name);
        const transactionItemWithCategory: TransactionWithCategoryItem = {
            ...curr,
            category: category,
            name: name,
        };
        acc.push(transactionItemWithCategory);
        return acc;
    }, []);
    return result;
};
