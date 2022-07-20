import { useEffect } from 'react';
import { transactionReducer } from '../services/transactionReducer';
import { useApiStore } from '../stores/useApiStore';
import { useDateStore } from '../stores/useDateStore';
import { getAxiosConfig } from '../utils/getAxiosConfig';
import { baseUrl, getTransactionsUrl } from '../utils/sbankenApi';
const axios = require('axios');
export const TransactionResolver = () => {
    const { bearerToken_store, accounts_store, setTransactions_store, transactions_store, setTransaction_data_store } =
        useApiStore();
    const { date_store, startDate_store, endDate_store } = useDateStore();
    useEffect(() => {
        if (transactions_store) {
            const result = transactionReducer(transactions_store.items);
            setTransaction_data_store(result);
        }
    }, [transactions_store]);
    useEffect(() => {
        if (accounts_store) initializer();
        if (!accounts_store) console.log('accounts not set!');
    }, [accounts_store, date_store]);
    const initializer = async () => {
        const earliestDate = startDate_store < endDate_store ? startDate_store : endDate_store;
        const latestDate = earliestDate < endDate_store ? endDate_store : startDate_store;
        const url =
            baseUrl + getTransactionsUrl + accounts_store[0].accountId + `/?startDate=${earliestDate}&endDate=${latestDate}`;
        axios(getAxiosConfig('get', url, bearerToken_store)).then(
            (res: any) => {
                setTransactions_store(res.data);
            },
            (err: any) => {
                console.log('error transaction data');
                console.log(err);
                console.log(`status: ${err.response.status} - message: ${err.response.statusText}`);
            },
        );
    };
    return (
        <>
            <h1>test</h1>
        </>
    );
};
