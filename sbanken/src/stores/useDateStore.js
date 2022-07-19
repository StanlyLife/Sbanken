import { dateStore } from './dateStore';
export const useDateStore = () => ({
    // date
    date_store: dateStore((state) => state.date_store),
    setDate_store: dateStore((state) => state.setDate_store),
});
