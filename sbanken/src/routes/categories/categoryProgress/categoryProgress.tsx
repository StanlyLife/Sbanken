import { useEffect, useState } from 'react';
import { categoryItem } from '../../../interfaces/categoryItem';
import { TransactionItem } from '../../../interfaces/transactionItem';
import { useApiStore } from '../../../stores/useApiStore';
import './categoryProgress.scss';
import { ProgressCircle } from './progressCircle/progressCircle';
import { ProgressGrid } from './progressGrid/progressGrid';
import { getTransactionsWithCategories, getTransactionsGroupedInCategories } from './utils/categoryProgressUtils';

export const CategoryProgress = () => {
    const { transactions_store } = useApiStore();
    const [transactions, setTransactions] = useState<TransactionItem[]>();
    const [transactionCategories, setTransactionCategories] = useState<categoryItem[]>();
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [transactionGridOpen, setTransactionGridOpen] = useState<boolean>(false);
    useEffect(() => {
        setTransactions(transactions_store.items);
    }, [transactions_store]);
    useEffect(() => {
        if (!transactions) return;
        const newTransactions = getTransactionsWithCategories(transactions);
        const categorizedTransactions = getTransactionsGroupedInCategories(newTransactions);
        setTransactionCategories(categorizedTransactions);
        setTotalAmount(categorizedTransactions.reduce((acc, curr) => (curr.amount < 0 ? (acc += curr.amount) : acc), 0));
    }, [transactions]);
    return (
        <div className='category-process-component'>
            <div className='transactions'>
                {transactionCategories?.map((transaction) => (
                    <ProgressCircle
                        transaction={transaction}
                        key={transaction.category}
                        setTransactionGridOpen={setTransactionGridOpen}
                        totalAmount={totalAmount}
                    />
                ))}
            </div>
            {transactionGridOpen && (
                <div
                    className={`transaction-grid`}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setTransactionGridOpen(false);
                    }}
                >
                    <ProgressGrid setTransactionGridOpen={setTransactionGridOpen} />
                </div>
            )}
        </div>
    );
};
