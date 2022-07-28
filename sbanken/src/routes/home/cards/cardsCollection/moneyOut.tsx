import { useEffect, useState } from 'react';
import { transactionReducedDataToGridData } from '../../../../services/transactionReducedDataToGridData';
import { useApiStore } from '../../../../stores/useApiStore';
import { transactionItem } from '../../spendingOverview/transactionItem';

export const MoneyOut = () => {
    const { transaction_data_store } = useApiStore();
    const [moneyOut, setMoneyOut] = useState(0);
    const [data, setData] = useState<any>();

    const getTotalAmountOfSpending = () => {
        if (data)
            return data?.reduce((acc: number, curr: transactionItem) => {
                if (curr && curr.amount < 0) acc += curr.amount;
                return acc;
            }, 0);
        return 0;
    };

    useEffect(() => {
        const newData = Object.entries(transaction_data_store).map((e) => ({ [e[0]]: e[1] }));
        const transactionData = transactionReducedDataToGridData(newData);
        setData(transactionData);
    }, [transaction_data_store]);

    useEffect(() => {
        setMoneyOut(getTotalAmountOfSpending().toString().replace('-', ''));
    }, [data]);

    return (
        <>
            <div className='card money-out-component'>
                <p className='key'>Penger ut</p>
                <p className='value'>{Math.round(moneyOut)}kr</p>
            </div>
        </>
    );
};
