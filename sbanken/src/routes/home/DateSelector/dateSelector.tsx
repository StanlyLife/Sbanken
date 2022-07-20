import { useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { useDateStore } from '../../../stores/useDateStore';
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
        console.log('yesterDay');
        console.log(yesterDay);
        setDate_store([date.selection]);
        setStartDate_store(formatDateToIso([date.selection][0].startDate));
        setEndDate_store(formatDateToIso([date.selection][0].endDate));
    };

    const formatDateToIso = (date: Date) => {
        const timeZoneOffset = (date.getTimezoneOffset() / 60) * -1;
        date.setHours(date.getHours() + timeZoneOffset);
        const formatedIsoDate = date.toISOString().substring(0, 10);
        return formatedIsoDate;
    };

    useEffect(() => {
        console.log(date_store);
    }, [date_store]);

    return <>{date_store && <DateRangePicker ranges={date_store} onChange={handleSelect} />}</>;
};
