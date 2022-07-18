import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const apiStore = create(
    devtools((set, get) => ({
        //bearertoken
        bearerToken_store: '',
        setBearerToken_store: (data) => set({ bearerToken_store: data }, false, 'set bearer token'),
        //Accounts
        accounts_store: '',
        setAccounts_store: (data) => set({ accounts_store: data }, false, 'set account data'),
        //Transactions
        transactions_store: '',
        setTransactions_store: (data) => set({ transactions_store: data }, false, 'set transactions data'),
        //Transaction data
        transaction_data_store: '',
        setTransaction_data_store: (data) => set({ transaction_data_store: data }, false, 'set transaction data'),
    })),
);
