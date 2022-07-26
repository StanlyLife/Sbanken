import { TransactionGrid } from './transactionGrid/transactionGrid';
import { TransactionSummaryGrid } from './transactionSummaryGrid/transactionSummaryGrid';

export const Grids = () => {
    return (
        <>
            <TransactionSummaryGrid />
            <TransactionGrid />
        </>
    );
};
