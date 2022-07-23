import { useEffect, useState } from 'react';
import { useApiStore } from '../../../stores/useApiStore';

export const MoneyIn = () => {
    const { transactions_store } = useApiStore();
    const [moneyIn, setMoneyIn] = useState(0);
    useEffect(() => {
        if (transactions_store) {
            const moneyIn = transactions_store.items.reduce((acc: number, curr: any) => {
                if (curr.amount > 0) acc += curr.amount;
                return acc;
            }, 0);
            setMoneyIn(Math.round(moneyIn));
        }
    }, [transactions_store]);

    return (
        <>
            <div className='card money-in-component'>
                <p className='key'>Penger inn</p>
                <p className='value'>{moneyIn}kr</p>
            </div>
        </>
    );
};
