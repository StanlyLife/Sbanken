import { Creaditcard } from '../../../components/creditcard/creditcard';
import { useApiStore } from '../../../stores/useApiStore';
import { RecentTransactions } from '../recentTransactions/recentTransactions';
import { SpendingGraph } from '../spendingGraph/spendingGraph';
import { SpendingOverview } from '../spendingOverview/spendingOverview';
import './homeWrapper.scss';

export const HomeWrapper = () => {
    const { accounts_store } = useApiStore();
    return (
        <div className='home-wrapper-component'>
            {/* <OverviewProgress /> */}
            {/* <TransactionSummaryGrid />
            <TransactionGrid /> */}
            <div className='top'>
                <div className='accounts'>
                    {accounts_store &&
                        accounts_store.map((account: any) => (
                            <Creaditcard
                                key={account.accountId}
                                accountNumber={account.accountNumber}
                                balance={account.balance}
                                available={account.available}
                                name={account.name}
                            />
                        ))}
                </div>
                <RecentTransactions></RecentTransactions>
            </div>

            <div className='spending-info'>
                <SpendingOverview></SpendingOverview>
                <SpendingGraph></SpendingGraph>
            </div>
        </div>
    );
};
