import { AvailableBalance } from './availableBalance';
import { Balance } from './balance';
import { MoneyIn } from './moneyIn';
import { Reserved } from './reserved';
import './cards.scss';
import { useDateStore } from '../../../stores/useDateStore';
import { MoneyOut } from './moneyOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { formatDateToIso } from '../../../services/formatDateToIso';
export const Cards = () => {
    const { endDate_store, startDate_store, setStartDate_store, setEndDate_store, setDate_store } = useDateStore();
    const [monthsToMove, setMonthsToMove] = useState<number>(0);
    const daysInMonth = (month: number, year: number) => {
        return new Date(year, month, 0).getDate();
    };
    useEffect(() => {
        const date = new Date();
        const startDate = new Date(date.getFullYear(), date.getMonth() + monthsToMove, 1);
        const endOfMonth = daysInMonth(new Date(startDate).getMonth(), new Date(startDate).getFullYear());
        const endDate = new Date(date.getFullYear(), date.getMonth() + monthsToMove, endOfMonth - 1);
        setStartDate_store(formatDateToIso(startDate));
        setEndDate_store(formatDateToIso(endDate));
        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: 'selection',
        };
        setDate_store(selectionRange);
    }, [monthsToMove]);

    const ChangeDate = (isLeft: boolean) => {
        if (isLeft) setMonthsToMove((prev) => (prev -= 1));
        if (!isLeft && monthsToMove < 0) setMonthsToMove((prev) => (prev += 1));
        console.log('Changed date ', monthsToMove);
    };

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
                <button className='arrow left' onClick={() => ChangeDate(true)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
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
                    : //Default date
                      `${new Date().toLocaleDateString('no-nb', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                      })} - siste 30 dager`}
                <button className='arrow left' onClick={() => ChangeDate(false)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};
