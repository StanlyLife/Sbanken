import { dateStore } from './dateStore';
export const useDateStore = () => ({
    // date
    date_store: dateStore((state) => state.date_store),
    setDate_store: dateStore((state) => state.setDate_store),
    // startdate
    startDate_store: dateStore((state) => state.startDate_store),
    setStartDate_store: dateStore((state) => state.setStartDate_store),
    // enddate
    endDate_store: dateStore((state) => state.endDate_store),
    setEndDate_store: dateStore((state) => state.setEndDate_store),
});
