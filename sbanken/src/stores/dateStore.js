import create from 'zustand';
import { devtools } from 'zustand/middleware';
const selectionRange = {
    startDate: new Date(new Date().setDate(new Date().getDate() - 30)),
    endDate: new Date(),
    key: 'selection',
};
export const dateStore = create(
    devtools((set, get) => ({
        //date
        date_store: [selectionRange],
        setDate_store: (data) => set({ date_store: data }, false, 'set date range'),
        //start date
        startDate_store: undefined,
        setStartDate_store: (data) => set({ startDate_store: data }, false, 'set start date'),
        //end date
        endDate_store: undefined,
        setEndDate_store: (data) => set({ endDate_store: data }, false, 'set end date'),
    })),
);
