import { useEffect } from 'react';
import { accountResolverTestData } from '../data/testData';
import { useApiStore } from '../stores/useApiStore';
export const useTestAccount = () => {
    const { login_store, setAccounts_store, setActiveAccount_store } = useApiStore();
    useEffect(() => {
        if (login_store.isTestData) {
            setAccounts_store(accountResolverTestData);
            setActiveAccount_store(accountResolverTestData[0]);
        }
    }, [login_store]);
};
