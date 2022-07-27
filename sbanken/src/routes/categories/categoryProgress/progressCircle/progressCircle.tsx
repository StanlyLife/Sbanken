import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { transactionCategory } from '../../../../enums/transactionCategory';
import { categoryItem } from '../../../../interfaces/categoryItem';
import { useApiStore } from '../../../../stores/useApiStore';
import { TransactionTypeIconMapper } from '../../../../utils/transactionTypeIconMapper';
import './progressCircle.scss';
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
    const ChangeProgressCategoryData = () => {
        setTransactionGridOpen(true);
        setActive_category_store(transaction.transactions);
    };

    const GetIcon = (cateogry: string) => {
        return TransactionTypeIconMapper(cateogry);
    };
    const category = transactionCategory[transaction.category];
    return (
        <button className='category-progress-component' key={transaction.category} onClick={ChangeProgressCategoryData}>
            <CircularProgressbarWithChildren
                className='circle'
                value={percentage}
                styles={buildStyles({
                    pathTransitionDuration: 0.5,
                })}
                strokeWidth={6}
            >
                <div className={`inner-circle ${category}`}>
                    {GetIcon(category)}
                    <p>{`${Math.round(transaction.amount)}kr`}</p>
                    {transaction.amount < 0 && <strong>{`${percentage}%`}</strong>}
                </div>
            </CircularProgressbarWithChildren>
            <p className='category'>{`${category}`}</p>
        </button>
    );
};
