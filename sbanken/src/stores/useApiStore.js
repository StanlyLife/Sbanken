import { apiStore } from './apiStore';
export const useApiStore = () => ({
    //login
    login_store: apiStore((state) => state.login_store),
    setLogin_store: apiStore((state) => state.setLogin_store),
    // Bearertoken
    bearerToken_store: apiStore((state) => state.bearerToken_store),
    setBearerToken_store: apiStore((state) => state.setBearerToken_store),
    // Account
    accounts_store: apiStore((state) => state.accounts_store),
    setAccounts_store: apiStore((state) => state.setAccounts_store),
    // Active Account
    activeAccount_store: apiStore((state) => state.activeAccount_store),
    setActiveAccount_store: apiStore((state) => state.setActiveAccount_store),
    // Transactions
    transactions_store: apiStore((state) => state.transactions_store),
    setTransactions_store: apiStore((state) => state.setTransactions_store),
    // Transaction Data
    transaction_data_store: apiStore((state) => state.transaction_data_store),
    setTransaction_data_store: apiStore((state) => state.setTransaction_data_store),
    // active category
    active_category_store: apiStore((state) => state.active_category_store),
    setActive_category_store: apiStore((state) => state.setActive_category_store),
    //Error messages
    /* if you happen to come across this code, this error handling is terrible */
    /* it was implemented to solve 1 problem in 1 component and should not be replicated */
    errorMessage_store: apiStore((state) => state.errorMessage_store),
    setErrorMessage_store: apiStore((state) => state.setErrorMessage_store),
});
