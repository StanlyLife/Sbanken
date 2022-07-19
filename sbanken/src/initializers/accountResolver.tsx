import { useEffect } from 'react';
import { useApiStore } from '../stores/useApiStore';
import { getAxiosConfig } from '../utils/getAxiosConfig';
import { baseUrl, getAccountsUrl } from '../utils/sbankenApi';
const axios = require('axios');
export const AccountResolver = () => {
    const { bearerToken_store, setAccounts_store } = useApiStore();
    useEffect(() => {
        initializer();
    }, [bearerToken_store]);
    const initializer = async () => {
        const url = baseUrl + getAccountsUrl;
        axios(getAxiosConfig('get', url, bearerToken_store)).then(
            (res: any) => {
                setAccounts_store(res.data.items);
            },
            (err: any) => {
                console.log('error retrieving auth token');
                console.log(err);
            },
        );
    };
    return (
        <>
            {/* {accounts_store &&
                accounts_store.map((account: AccountItem) => {
                    return (
                        <div>
                            <p>{account.accountNumber}</p>
                            <p>{account.available}</p>
                            <p>{account.balance}</p>
                        </div>
                    );
                })} */}
        </>
    );
};
