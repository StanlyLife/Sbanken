import { AvailableBalance } from './availableBalance';
import { Balance } from './balance';
import { MoneyIn } from './moneyIn';
import { Reserved } from './reserved';
import './cards.scss';
import { useDateStore } from '../../../stores/useDateStore';
import { MoneyOut } from './moneyOut';
export const Cards = () => {
    const { endDate_store, startDate_store } = useDateStore();
    return (
        <div className='cards-component'>
            <div className='cards-wrapper'>
                <AvailableBalance />
                <Reserved />
                <Balance />
                <MoneyIn />
                <MoneyOut />
            </div>
            <div className='date'>
                {startDate_store &&
                    `${new Date(startDate_store).toLocaleDateString('no-nb', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })} - `}
                {endDate_store
                    ? new Date(endDate_store).toLocaleDateString('no-nb', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                      })
                    : new Date().toLocaleDateString('no-nb', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                      })}
            </div>
        </div>
    );
};
