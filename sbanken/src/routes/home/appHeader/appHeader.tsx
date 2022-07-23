import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './appHeader.scss';
import { DateSelector } from './DateSelector/dateSelector';
import { useState } from 'react';
import { Cards } from '../cards/cards';
export const AppHeader = () => {
    const [displayCalendar, setDisplayCalendar] = useState<boolean>(false);
    return (
        <>
            <header className='app-header-component'>
                <Cards />

                <button className='calendar-button' onClick={() => setDisplayCalendar((prev: boolean) => !prev)}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </button>
            </header>
            {displayCalendar && <DateSelector setDisplayCalendar={setDisplayCalendar} />}
        </>
    );
};
