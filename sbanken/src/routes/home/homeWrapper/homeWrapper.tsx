import { Creaditcard } from '../../../components/creditcard/creditcard';
import { TransactionGrid } from '../overviewProgress/grids/transactionGrid/transactionGrid';
import { TransactionSummaryGrid } from '../overviewProgress/grids/transactionSummaryGrid/transactionSummaryGrid';

export const HomeWrapper = () => {
    return (
        <>
            {/* <OverviewProgress /> */}
            <TransactionSummaryGrid />
            <TransactionGrid />
            <Creaditcard />
        </>
    );
};
