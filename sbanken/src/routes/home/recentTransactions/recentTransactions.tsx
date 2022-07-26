import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { transactionTypes } from '../../../enums/transactionTypes';
import { useApiStore } from '../../../stores/useApiStore';
import { TransactionTypeIconMapper } from '../../../utils/transactionTypeIconMapper';
import './recentTransactions.scss';

export const RecentTransactions = () => {
    const increaseNumber = 3;
    const { transactions_store } = useApiStore();
    const [transactionsAmount, setTransactionsAmount] = useState<number>(increaseNumber);
    const [transactionsArray, setTransactionsArray] = useState<Array<any>>();
    const bottomRef = useRef<null | HTMLDivElement>(null);
    useEffect(() => {
        if (transactions_store) {
            const slicedArray = transactions_store.items.slice(0, transactionsAmount);
            setTransactionsArray(slicedArray);
        }
    }, [transactionsAmount]);

    useLayoutEffect(() => {
        if (transactions_store) {
            const slicedArray = transactions_store.items.slice(0, transactionsAmount);
            console.log(slicedArray);
            setTransactionsArray(slicedArray);
        }
    }, [transactions_store]);
    useLayoutEffect(() => {
        setTimeout(function () {
            if (bottomRef.current) bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
        }, 10);
    }, [transactionsAmount]);

    const getTransactionIcon = (name: string) => {
        return TransactionTypeIconMapper(name);
    };

    return (
        <div className='recent-transactions-component'>
            <div className='transactions-wrapper' ref={bottomRef}>
                {transactionsArray &&
                    transactionsArray.map((transaction: any, idx: number) => {
                        return (
                            <div className='recent-transaction' key={idx}>
                                <div className={`icon t${transaction.transactionTypeCode}`}>
                                    {getTransactionIcon(transactionTypes[transaction.transactionTypeCode])}
                                </div>
                                <div className='row'>
                                    <div className='group'>
                                        <p className='value' title={`transaksjonsnavn: ${transaction.text}`}>
                                            {transaction.text}
                                        </p>

                                        <p className='value' title='registrert dato'>
                                            {new Date(transaction.accountingDate.substring(0, 10)).toLocaleDateString(
                                                'no-nb',
                                                {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                },
                                            )}
                                        </p>
                                    </div>
                                    <p
                                        className='value'
                                        title={`kostnad - ${transactionTypes[transaction.transactionTypeCode]}`}
                                    >
                                        {transaction.amount}kr
                                    </p>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <button className='btn more' onClick={() => setTransactionsAmount((prev: number) => (prev += increaseNumber))}>
                more
            </button>
        </div>
    );
};
