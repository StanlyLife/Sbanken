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
import { getCardDates } from './localUtils/getCardDates';
import { useApiStore } from '../../../stores/useApiStore';
import { HeaderDatesDispaly } from './headerDatesDispaly';
export const Cards = () => {
    const { setStartDate_store, setEndDate_store, setDate_store } = useDateStore();
    const { transactions_store } = useApiStore();
    const [monthsToMove, setMonthsToMove] = useState<number>(-1);
    const [nextMonthsName, setNextMonthsName] = useState<Array<string>>([]);

    useEffect(() => {
        if (transactions_store) {
            const { startDate, endDate, selectionRange, previousMonthName, nextMonthName } = getCardDates(monthsToMove);
            setStartDate_store(formatDateToIso(startDate));
            setEndDate_store(formatDateToIso(endDate));
            setNextMonthsName([previousMonthName, nextMonthName]);
            setDate_store(selectionRange);
        }
    }, [monthsToMove]);

    const ChangeDate = (isLeft: boolean) => {
        if (isLeft) setMonthsToMove((prev) => (prev -= 1));
        if (!isLeft && monthsToMove < 0) setMonthsToMove((prev) => (prev += 1));
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
                <button className='arrow left' onClick={() => ChangeDate(true)} title={nextMonthsName && nextMonthsName[0]}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <HeaderDatesDispaly />
                <button
                    className={`arrow left ${monthsToMove >= -1 ? 'disabled' : ''}`}
                    onClick={() => ChangeDate(false)}
                    title={nextMonthsName && nextMonthsName[1]}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
};
