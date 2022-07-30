import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './appHeader.scss';
import { DateSelector } from './DateSelector/dateSelector';
import { useState } from 'react';
import { Cards } from '../cards/cards';
import { useApiStore } from '../../../stores/useApiStore';
export const AppHeader = () => {
    const [displayCalendar, setDisplayCalendar] = useState<boolean>(false);
    const { login_store } = useApiStore();

    return (
        <>
            <header className='app-header-component'>
                <Cards />

                {!login_store.isTestData && (
                    <button className='calendar-button' onClick={() => setDisplayCalendar((prev: boolean) => !prev)}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </button>
                )}
            </header>
            {displayCalendar && <DateSelector setDisplayCalendar={setDisplayCalendar} />}
        </>
    );
};
