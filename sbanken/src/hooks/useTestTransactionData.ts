import { useEffect } from 'react';
import { transactionDataResolverTestData } from '../data/testData';
import { useApiStore } from '../stores/useApiStore';
export const useTestTransactionData = () => {
    const { login_store, setTransaction_data_store } = useApiStore();
    useEffect(() => {
        if (login_store.isTestData) {
            setTransaction_data_store(transactionDataResolverTestData);
        }
    }, [login_store]);
};
