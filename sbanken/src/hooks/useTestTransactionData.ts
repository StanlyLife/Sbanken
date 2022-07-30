import { useEffect } from 'react';
import { transactionResolverTestData } from '../data/testData';
import { useApiStore } from '../stores/useApiStore';
export const useTestTransactionData = () => {
    const { login_store, setTransaction_data_store } = useApiStore();
    useEffect(() => {
        console.log('trying to use testData');
        if (login_store.isTestData) {
            console.log('using Test Data!');
            setTransaction_data_store(transactionResolverTestData);
        }
    }, [login_store]);
};
