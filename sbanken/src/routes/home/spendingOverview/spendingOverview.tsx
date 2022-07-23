import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { transactionReducedDataToGridData } from '../../../services/transactionReducedDataToGridData';
import { useApiStore } from '../../../stores/useApiStore';
import { transactionItem } from './transactionItem';
import './spendingOverview.scss';
import { TransactionIconMapper } from '../../../utils/transactionIconMapper';
import { TransactionCategoryMapper } from '../../../utils/transactionCategoryMapper';
import { transactionCategory } from '../../../enums/transactionCategory';

export const SpendingOverview = () => {
    const { transaction_data_store } = useApiStore();
    const [data, setData] = useState<any>();
    useEffect(() => {
        const data = Object.entries(transaction_data_store).map((e) => ({ [e[0]]: e[1] }));
        const transactionData = transactionReducedDataToGridData(data);
        setData(transactionData);
    }, [transaction_data_store]);
    const getTransactionIcon = (state: boolean, name: string) => {
        const a = TransactionIconMapper(name);
        const category = TransactionCategoryMapper(name);
        if (a) return <div className={`icon ${category && transactionCategory[category]}`}>{a}</div>;
        return (
            <div className={`icon ${state ? 'in' : 'out'}`}>
                {state ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
            </div>
        );
    };
    return (
        <div className='spending-overview-component'>
            <div className='transactions-wrapper'>
                {data &&
                    data.map((transaction: transactionItem, idx: number) => (
                        <div className='transaction' key={idx}>
                            {getTransactionIcon(transaction.amount > 0, transaction.name)}
                            <div className='info'>
                                <div className='p1'>
                                    <div className='column'>
                                        <p className='value name'>{transaction.name}</p>
                                    </div>
                                    <div className='column'>
                                        <p className='title'>Overførte kroner</p>
                                        <p className='value'>{Math.round(transaction.amount)}kr</p>
                                    </div>
                                </div>
                                <div className='p2'>
                                    <div className='column'>
                                        {/* <p className='title' title='Gjennomsnitts overføring'></p> */}
                                        <p className='value' title='Gjennomsnitts overføring'>
                                            {Math.round(transaction.amount / transaction.count)}kr
                                        </p>
                                    </div>
                                    <div className='column'>
                                        {/* <p className='title'>Antall overføringer</p> */}
                                        <p className='value' title='Antall overføringer'>
                                            {transaction.count} transaksjoner
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
