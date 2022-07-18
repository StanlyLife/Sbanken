import { useEffect } from 'react';
import { transactionReducer } from '../services/transactionReducer';
import { useApiStore } from '../stores/useApiStore';
import { getAxiosConfig } from '../utils/getAxiosConfig';
import { baseUrl, getTransactionsUrl } from '../utils/sbankenApi';
const axios = require('axios');
export const TransactionResolver = () => {
    const { bearerToken_store, accounts_store, setTransactions_store, transactions_store } = useApiStore();
    useEffect(() => {
        if (transactions_store) {
            const result = transactionReducer(transactions_store.items);
            console.log(result);
        }
    }, [transactions_store]);
    useEffect(() => {
        if (accounts_store) initializer();
        if (!accounts_store) console.log('accounts not set!');
    }, [accounts_store]);
    const initializer = async () => {
        console.log('accounts_store');
        console.log(accounts_store);
        const url = baseUrl + getTransactionsUrl + accounts_store[0].accountId;
        axios(getAxiosConfig('get', url, bearerToken_store)).then(
            (res: any) => {
                setTransactions_store(res.data);
            },
            (err: any) => {
                console.log('error retrieving auth token');
                console.log(err);
            },
        );
    };
    return (
        <>
            <h1>test</h1>
        </>
    );
};
