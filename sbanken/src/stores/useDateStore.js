import { apiStore } from './apiStore';
export const useApiStore = () => ({
    // date
    date_store: apiStore((state) => state.date_store),
    setDate_store: apiStore((state) => state.setDate_store),
});
