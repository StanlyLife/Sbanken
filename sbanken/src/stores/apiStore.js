import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const apiStore = create(
    devtools((set, get) => ({
        bearerToken_store: '',
        setBearerToken_store: (data) => set({ bearerToken_store: data }, false, 'set bearer token'),
    })),
);
