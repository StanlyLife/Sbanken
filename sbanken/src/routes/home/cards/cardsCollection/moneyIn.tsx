import { useEffect, useState } from 'react';
import { transactionReducedDataToGridData } from '../../../../services/transactionReducedDataToGridData';
import { useApiStore } from '../../../../stores/useApiStore';
import { transactionItem } from '../../spendingOverview/transactionItem';

export const MoneyIn = () => {
    const { transaction_data_store } = useApiStore();
    const [moneyIn, setMoneyIn] = useState(0);
    const [data, setData] = useState<any>();

    const getTotalAmountOfSpending = () => {
        if (data)
            return data?.reduce((acc: number, curr: transactionItem) => {
                if (curr && curr.amount > 0) acc += curr.amount;
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
        setMoneyIn(getTotalAmountOfSpending());
    }, [data]);

    return (
        <>
            <div className='card money-in-component'>
                <p className='key'>Penger inn</p>
                <p className='value'>{Math.round(moneyIn)}kr</p>
            </div>
        </>
    );
};
