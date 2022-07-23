import { Creaditcard } from '../../../components/creditcard/creditcard';
import { useApiStore } from '../../../stores/useApiStore';

export const HomeWrapper = () => {
    const { accounts_store } = useApiStore();
    return (
        <>
            {/* <OverviewProgress /> */}
            {/* <TransactionSummaryGrid />
            <TransactionGrid /> */}
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
        </>
    );
};
