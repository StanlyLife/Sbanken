import { useEffect } from 'react';
import { useApiStore } from '../stores/useApiStore';
import { getAxiosConfig } from '../utils/getAxiosConfig';
import { baseUrl, getPaymentsUrl } from '../utils/sbankenApi';
const axios = require('axios');
export const PaymentsResolver = () => {
    const { bearerToken_store, accounts_store } = useApiStore();
    useEffect(() => {
        initializer();
    }, [accounts_store]);
    const initializer = async () => {
        const url = baseUrl + getPaymentsUrl + accounts_store[0].accountId;
        axios(getAxiosConfig('get', url, bearerToken_store)).then(
            (res: any) => {
                console.log('res.data');
                console.log(res);
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
