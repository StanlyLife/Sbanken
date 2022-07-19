import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const apiStore = create(
    devtools((set, get) => ({
        //date
        date_store: '',
        setDate_store: (data) => set({ date_store: data }, false, 'set date range'),
    })),
);
