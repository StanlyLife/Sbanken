import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './appHeader.scss';
import { DateSelector } from './DateSelector/dateSelector';
import { useState } from 'react';
export const AppHeader = () => {
    const [displayCalendar, setDisplayCalendar] = useState<boolean>(false);
    return (
        <>
            <header className='app-header-component'>
                <h1 className='title'>Sbanken forbruk</h1>
                <button className='calendar-button' onClick={() => setDisplayCalendar((prev: boolean) => !prev)}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </button>
                <span className='border-bottom'></span>
            </header>
            {displayCalendar && <DateSelector setDisplayCalendar={setDisplayCalendar} />}
        </>
    );
};
