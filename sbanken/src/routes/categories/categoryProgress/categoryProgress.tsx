import { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { transactionCategory } from '../../../enums/transactionCategory';
import { TransactionItem, TransactionWithCategoryItem } from '../../../interfaces/transactionItem';
import { useApiStore } from '../../../stores/useApiStore';
import { TransactionBlackList } from '../../../utils/blackList';
import { TransactionCategoryMapper } from '../../../utils/transactionCategoryMapper';
import './categoryProgress.scss';

type categoryItems = {
    category: transactionCategory;
    color: string;
    count: number;
    amountIn: number;
    amountOut: number;
    amount: number;
    transactions: TransactionItem[];
};

export const CategoryProgress = () => {
    const { transactions_store } = useApiStore();
    const [transactions, setTransactions] = useState<TransactionItem[]>();
    const [transactionCategories, setTransactionCategories] = useState<categoryItems[]>();
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
            {transactionCategories?.map((transaction) => {
                //
                const percentage = Math.round((transaction.amount / totalAmount) * 100);
                return (
                    <button
                        className='progress-bar'
                        key={transaction.category}
                        onClick={() => setTransactionGridOpen((prev) => !prev)}
                    >
                        <CircularProgressbarWithChildren
                            value={percentage}
                            styles={buildStyles({
                                pathTransitionDuration: 0.5,
                            })}
                            strokeWidth={6}
                        >
                            <p>{`${Math.round(Math.abs(transaction.amount))}kr`}</p>
                            <strong>{`${percentage}%`}</strong>
                        </CircularProgressbarWithChildren>
                        <h3>{`${transactionCategory[transaction.category]}`}</h3>
                    </button>
                );
            })}
            <div className={`transaction-grid ${transactionGridOpen ? 'open' : 'closed'}`}>
                <button onClick={() => setTransactionGridOpen((prev) => !prev)}>CLOSE</button>
                <h1>transaction view</h1>
            </div>
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
            existingCategory.transactions.push(curr);
        } else {
            const categoryItem: categoryItems = {
                category: curr.category,
                color: 'temporary color',
                count: 1,
                amountIn: curr.amount > 0 ? curr.amount : 0,
                amountOut: curr.amount < 0 ? curr.amount : 0,
                amount: curr.amount,
                transactions: [curr],
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
        if (TransactionBlackList.includes(name)) return acc;
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
