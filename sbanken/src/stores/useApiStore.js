import { apiStore } from './apiStore';
export const useApiStore = () => ({
    // Bearertoken
    bearerToken_store: apiStore((state) => state.bearerToken_store),
    setBearerToken_store: apiStore((state) => state.setBearerToken_store),
    // Account
    accounts_store: apiStore((state) => state.accounts_store),
    setAccounts_store: apiStore((state) => state.setAccounts_store),
});
