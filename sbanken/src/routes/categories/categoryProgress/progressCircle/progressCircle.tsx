import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { transactionCategory } from '../../../../enums/transactionCategory';
import { categoryItem } from '../../../../interfaces/categoryItem';

export const ProgressCircle = ({
    transaction,
    totalAmount,
    setTransactionGridOpen,
}: {
    transaction: categoryItem;
    totalAmount: number;
    setTransactionGridOpen: Function;
}) => {
    const percentage = Math.round((transaction.amount / totalAmount) * 100);
    return (
        <button
            className='progress-bar'
            key={transaction.category}
            onClick={() => setTransactionGridOpen((prev: boolean) => !(prev as boolean))}
        >
            <CircularProgressbarWithChildren
                value={percentage}
                styles={buildStyles({
                    pathTransitionDuration: 0.5,
                })}
                strokeWidth={6}
            >
                <p>{`${Math.round(Math.abs(transaction.amount))}kr`}</p>
                <strong>{`${percentage}%`}</strong>
            </CircularProgressbarWithChildren>
            <h3>{`${transactionCategory[transaction.category]}`}</h3>
        </button>
    );
};
