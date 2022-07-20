import { DateRangePicker } from 'react-date-range';
import { formatDateToIso } from '../../../services/formatDateToIso';
import { useDateStore } from '../../../stores/useDateStore';
import './dateSelector.scss';
export const DateSelector = () => {
    const { date_store, setDate_store, setStartDate_store, setEndDate_store } = useDateStore();
    const handleSelect = (date: any) => {
        const yesterDay = new Date(new Date().setDate(new Date().getDate() - 1));
        //Check if dates are valid
        const endDateIsLessThanToday = date.selection.endDate < yesterDay;
        const startDateIsLessThanToday = date.selection.startDate < yesterDay;
        //Disable selection of dates later than to day
        //Set yesterday as api cannot handle 'today'
        //UI will still display today as selected
        if (!endDateIsLessThanToday) date.selection.endDate = yesterDay;
        if (!startDateIsLessThanToday) date.selection.startDate = yesterDay;
        setDate_store([date.selection]);
        setStartDate_store(formatDateToIso([date.selection][0].startDate));
        setEndDate_store(formatDateToIso([date.selection][0].endDate));
    };

    return (
        <>
            {date_store && (
                <DateRangePicker className='date-selector-component' ranges={date_store} onChange={handleSelect} />
            )}
        </>
    );
};
