/*
Filters transaction data
returns only objects which represents
percentageSpent > minimumLimitPercentage
----------------------------------------
eg. A transaction data which represents 1% of monthly budget will be removed if
minimumLimitPercentage == 2
*/
export const transactionDataPercentageExceder = (
    transaction_data_store: any,
    totalSpending: number,
    minimumLimitPercentage: number,
) =>
    transaction_data_store.filter((x: any) => {
        const currentAmount = x[Object.keys(x)[0]].amount;
        const result = Math.round((Math.abs(currentAmount) / Math.abs(totalSpending)) * 100) > minimumLimitPercentage;
        return result;
    });
