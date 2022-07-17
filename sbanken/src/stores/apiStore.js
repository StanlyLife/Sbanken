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
    })),
);
