export const formatDateToIso = (date: Date) => {
    const timeZoneOffset = (date.getTimezoneOffset() / 60) * -1;
    date.setHours(date.getHours() + timeZoneOffset);
    const formatedIsoDate = date.toISOString().substring(0, 10);
    return formatedIsoDate;
};
