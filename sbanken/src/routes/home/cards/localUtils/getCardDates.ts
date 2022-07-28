const daysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
};
export const getCardDates = (monthsToMove: number) => {
    const date = new Date();
    const startDate = new Date(date.getFullYear(), date.getMonth() + monthsToMove, 1);
    const endOfMonth = daysInMonth(new Date(startDate).getMonth(), new Date(startDate).getFullYear());
    let endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, endOfMonth - 1);
    if (endDate > date) endDate = new Date(new Date().setDate(new Date().getDate() - 1)); // yesterday
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };
    const previousMonthName = new Date(startDate.setMonth(startDate.getMonth() - 1)).toLocaleString('default', {
        month: 'long',
    });
    const nextMonthName = new Date(startDate.setMonth(startDate.getMonth() + 2)).toLocaleString('default', {
        month: 'long',
    });
    return {
        startDate: startDate,
        endDate: endDate,
        selectionRange: selectionRange,
        previousMonthName: previousMonthName,
        nextMonthName: nextMonthName,
    };
};
