import { TransactionGrid } from './transactionGrid/transactionGrid';
import { TransactionSummaryGrid } from './transactionSummaryGrid/transactionSummaryGrid';
import './grids.scss';
export const Grids = () => {
    return (
        <div className='grids-component'>
            {/* Recent transactions */}
            <div className='transaction-grid'>
                <h2>Nylige transaksjoner</h2>
                <TransactionGrid />
            </div>
            {/*Grouped transactions - Recurring transactions grouped into 1 column*/}
            <div className='summary-grid'>
                <h2>Grupperte transaksjoner</h2>
                <TransactionSummaryGrid />
            </div>
        </div>
    );
};
