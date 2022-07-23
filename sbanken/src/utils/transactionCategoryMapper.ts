import { transactionCategory } from '../enums/transactionCategory';

const category = {
    'APPLE.COM/BILL': transactionCategory.unknown,
    'Oda.com - xnhxe5': transactionCategory.food,
    'WEORDER* DIGG PIZZA': transactionCategory.food,
    'Bekreftet VISA': transactionCategory.unknown,
    'ODEON KINO APP': transactionCategory.recreation,
    'Kygo 2022 / Sky Agency': transactionCategory.recreation,
    RUTERAPPEN: transactionCategory.transport,
    RUTERBILLETT: transactionCategory.transport,
    'Yandex.Taxi': transactionCategory.transport,
    TRADINGVIEW1PRODUCT: transactionCategory.unknown,
    'STEAMGAMES.COM 4259522985': transactionCategory.games,
    'UDEMY: ONLINE COURSES': transactionCategory.learning,
    'HBO MAX': transactionCategory.recreation,
    Straksbetaling: transactionCategory.vipps,
    BUNNYCDN: transactionCategory.unknown,
};

export const TransactionCategoryMapper = (name: string) => {
    return category[name];
};
