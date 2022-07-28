import { AvailableBalance } from './availableBalance';
import { Balance } from './balance';
import { MoneyIn } from './moneyIn';
import { MoneyOut } from './moneyOut';
import { Reserved } from './reserved';

export const CardCollection = () => {
    return (
        <div className='cards-wrapper'>
            <AvailableBalance />
            <Reserved />
            <Balance />
            <MoneyIn />
            <MoneyOut />
        </div>
    );
};
