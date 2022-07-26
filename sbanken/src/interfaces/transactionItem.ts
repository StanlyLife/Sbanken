import { transactionCategory } from './../enums/transactionCategory';
/*
 * Items that are extracted from the transaction_data_store store
 */

export interface TransactionItem {
    accountingDate: Date;
    interestDate: Date;
    otherAccountNumberSpecified: boolean;
    amount: number;
    text: string;
    transactionType: string;
    transactionTypeCode: number;
    transactionTypeText: string;
    isReservation: boolean;
    reservationType: string;
    source: string;
    cardDetailsSpecified: boolean;
    transactionDetailSpecified: boolean;
    cardDetails?: cardDetails;
}

export interface cardDetails {
    cardNumber: string;
    currencyAmount: number;
    currencyRate: number;
    merchantCategoryCode: string;
    merchantCategoryDescription: string;
    merchantCity: string;
    merchantName: string;
    originalCurrencyCode: string;
    purchaseDate: Date;
    transactionId: string;
}

export interface TransactionWithCategoryItem extends TransactionItem {
    category: transactionCategory;
    name: string;
}
