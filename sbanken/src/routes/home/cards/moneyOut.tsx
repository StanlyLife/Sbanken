import { useEffect, useState } from 'react';
import { useApiStore } from '../../../stores/useApiStore';

export const MoneyOut = () => {
    const { transactions_store } = useApiStore();
    const [moneyOut, setMoneyOut] = useState<string>('0');
    useEffect(() => {
        if (transactions_store) {
            const moneyOut = transactions_store.items.reduce((acc: number, curr: any) => {
                if (curr.amount < 0) acc += curr.amount;
                return acc;
            }, 0);
            setMoneyOut(Math.round(moneyOut).toString().replace('-', ''));
        }
    }, [transactions_store]);

    return (
        <>
            <div className='card money-out-component'>
                <p className='key'>Penger ut</p>
                <p className='value'>{moneyOut}kr</p>
            </div>
        </>
    );
};
