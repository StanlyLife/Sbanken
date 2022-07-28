import { useState, useEffect } from 'react';
import { transactionReducedDataToGridData } from '../../../services/transactionReducedDataToGridData';
import { useApiStore } from '../../../stores/useApiStore';
import { transactionItem } from '../spendingOverview/transactionItem';
import './spendingGraph.scss';

//TODO REFACTOR COMPONENT!!!!

export const SpendingGraph = () => {
    const { transaction_data_store } = useApiStore();
    const [data, setData] = useState<Array<transactionItem>>();
    const [totalSpending, setTotalSpending] = useState<number>();
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
        setTotalSpending(getTotalAmountOfSpending());
    }, [data]);
    return (
        <div className='spending-graph-component'>
            <div className='transaction-wrapper'>
                {data && totalSpending ? (
                    data.map((transaction: transactionItem, idx: number) => {
                        //We do not want to display money in
                        const transactionIsCost = transaction.amount < 0;
                        if (transactionIsCost) {
                            const mostSpentCategory = data[0].amount;
                            //Percentage based of most spent category
                            //We want the top category to be 100% width
                            const percentageOfMostSpentTransaction = Math.round(
                                (Math.abs(transaction.amount) / Math.abs(mostSpentCategory)) * 100,
                            );
                            const percentageOfTotalSpending = Math.round(
                                (Math.abs(transaction.amount) / Math.abs(totalSpending)) * 100,
                            );
                            return (
                                <div className='transaction' key={transaction.name}>
                                    <div className='data'>
                                        <p className='name'>{transaction.name}</p>
                                        <p>
                                            {Math.round(transaction.amount)}kr / {percentageOfTotalSpending}%
                                        </p>
                                    </div>
                                    <div
                                        className='transaction-line'
                                        title={`${percentageOfMostSpentTransaction}%`}
                                        style={{ width: `${percentageOfMostSpentTransaction}%` }}
                                    ></div>
                                </div>
                            );
                        }
                        return <div key={idx}></div>;
                    })
                ) : (
                    <div className='error-msg'>
                        <h1>Ingen tilgjengelig data</h1>
                        <p>
                            Dette kan være fordi det er en feil, eller fordi du ikke har noen transaksjoner i dette
                            tidsrommet
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
