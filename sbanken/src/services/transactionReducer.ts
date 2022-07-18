import { transactionTypes } from '../enums/transactionTypes';

export const transactionReducer = (arr: Array<any>) => {
    return arr.reduce((acc: any, curr: any) => {
        if (curr.transactionTypeCode === 714 && curr.cardDetails) {
            if (acc[curr.cardDetails.merchantName]) {
                //update object
                acc[curr.cardDetails.merchantName].amount += curr.amount;
                acc[curr.cardDetails.merchantName].count += 1;
                return acc;
            }
            //add new value to object
            acc[curr.cardDetails.merchantName] = { amount: curr.amount, count: 1 };
            return acc;
        } else {
            if (acc[transactionTypes[curr.transactionTypeCode]]) {
                //update object
                acc[transactionTypes[curr.transactionTypeCode]].amount += curr.amount;
                acc[transactionTypes[curr.transactionTypeCode]].count += 1;
                return acc;
            }
            //add new value to object
            acc[transactionTypes[curr.transactionTypeCode]] = { amount: curr.amount, count: 1 };
            return acc;
        }
    }, {});
};
