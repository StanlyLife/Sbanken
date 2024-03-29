import { useEffect } from 'react';
import { useTestAccount } from '../hooks/useTestAccount';
import { useApiStore } from '../stores/useApiStore';
import { getAxiosConfig } from '../utils/getAxiosConfig';
import { baseUrl, getAccountsUrl } from '../utils/sbankenApi';
const axios = require('axios');
export const AccountResolver = () => {
    const { bearerToken_store, setAccounts_store, setActiveAccount_store } = useApiStore();
    useEffect(() => {
        if (bearerToken_store) initializer();
    }, [bearerToken_store]);
    useTestAccount();
    const initializer = async () => {
        const url = baseUrl + getAccountsUrl;
        axios(getAxiosConfig('get', url, bearerToken_store)).then(
            (res: any) => {
                setAccounts_store(res.data.items);
                if (res.data.items.length > 0) {
                    setActiveAccount_store(res.data.items[0]);
                }
                console.log(res.data.items);
            },
            (err: any) => {
                console.log('error account data');
                console.log(err);
                console.log(`status: ${err.response.status} - message: ${err.response.statusText}`);
            },
        );
    };
    return <></>;
};
