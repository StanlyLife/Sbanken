import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { transactionCategory } from '../../../../enums/transactionCategory';
import { categoryItem } from '../../../../interfaces/categoryItem';
import { useApiStore } from '../../../../stores/useApiStore';

export const ProgressCircle = ({
    transaction,
    totalAmount,
    setTransactionGridOpen,
}: {
    transaction: categoryItem;
    totalAmount: number;
    setTransactionGridOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { setActive_category_store } = useApiStore();
    const percentage = Math.round((transaction.amount / totalAmount) * 100);
    const ChangeProgress = () => {
        setTransactionGridOpen((prev: boolean) => !(prev as boolean));
        setActive_category_store(transaction.transactions);
    };
    return (
        <button className='progress-bar' key={transaction.category} onClick={ChangeProgress}>
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
