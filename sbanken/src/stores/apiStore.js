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
        //Active Account
        activeAccount_store: '',
        setActiveAccount_store: (data) => set({ activeAccount_store: data }, false, 'set account data'),
        //Transactions
        transactions_store: '',
        setTransactions_store: (data) => set({ transactions_store: data }, false, 'set transactions data'),
        //Transaction data
        transaction_data_store: '',
        setTransaction_data_store: (data) => set({ transaction_data_store: data }, false, 'set transaction data'),
        //active category
        active_category_store: '',
        setActive_category_store: (data) => set({ active_category_store: data }, false, 'set active category data data'),
    })),
);
