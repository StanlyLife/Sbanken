import { useEffect } from 'react';
import { transactionResolverTestData } from '../data/testData';
import { useApiStore } from '../stores/useApiStore';
export const useTestTransaction = () => {
    const { login_store, setTransactions_store } = useApiStore();
    useEffect(() => {
        if (login_store.isTestData) {
            setTransactions_store(transactionResolverTestData);
        }
    }, [login_store]);
};
