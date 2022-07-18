import { useLayoutEffect, useState } from 'react';
import { useApiStore } from '../../../stores/useApiStore';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import './overviewProgress.scss';
import { TransactionDataItem } from '../../../interfaces/transactionDataItem';
import { transactionDataPercentageExceder } from '../../../services/transactionDataPercentageExceeder';
export const OverviewProgress = () => {
    const { transaction_data_store } = useApiStore();
    const [totalSpending, setTotalSpending] = useState<number>(0);
    const [transactionData, setTransactionData] = useState<any>();
    const [minimumLimitPercentage] = useState<number>(0);
    useLayoutEffect(() => {
        setTotalSpending(getTotalSpending());
        initTransactionData();

        // setTransactionData(Object.entries(transaction_data_store).map((e) => ({ [e[0]]: e[1] })));
    }, [transaction_data_store]);

    const initTransactionData = () => {
        let data = Object.entries(transaction_data_store).map((e) => ({ [e[0]]: e[1] }));
        if (minimumLimitPercentage > 0)
            data = transactionDataPercentageExceder(data, getTotalSpending(), minimumLimitPercentage);
        setTransactionData(data);
    };

    //Get totalSpendingNumber
    const getTotalSpending = () =>
        Object.entries(transaction_data_store)
            .map((e) => e[1])
            .reduce((acc: number, cur: any) => (cur.amount < 0 ? (acc += cur.amount) : acc), 0);

    //Change visible costs

    return (
        <div className='overview-progress-component'>
            {transactionData &&
                transactionData.map((transactionCategory: any) => {
                    const name = Object.keys(transactionCategory)[0];
                    const obj: TransactionDataItem = transactionCategory[
                        Object.keys(transactionCategory)[0]
                    ] as TransactionDataItem;
                    const percentageOfTotalSpent = Math.round((Math.abs(obj.amount) / Math.abs(totalSpending)) * 100);
                    return (
                        <div className='progress-bar' key={name}>
                            <CircularProgressbarWithChildren
                                value={percentageOfTotalSpent}
                                styles={buildStyles({
                                    pathColor: 'red',
                                    trailColor: '#111',
                                    pathTransitionDuration: 0.5,
                                })}
                                strokeWidth={4}
                            >
                                <h3>{`${name}`}</h3>
                                <p>{`${Math.round(Math.abs(obj.amount))}kr`}</p>
                                <strong>{`${percentageOfTotalSpent}%`}</strong>
                            </CircularProgressbarWithChildren>
                        </div>
                    );
                })}
        </div>
    );
};
