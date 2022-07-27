import { transactionCategory } from '../enums/transactionCategory';

const category = {
    'APPLE.COM/BILL': transactionCategory.other,
    'Bekreftet VISA': transactionCategory.other,
    'Kygo 2022 / Sky Agency': transactionCategory.recreation,
    RUTERAPPEN: transactionCategory.transport,
    RUTERBILLETT: transactionCategory.transport,
    'Yandex.Taxi': transactionCategory.transport,
    TRADINGVIEW1PRODUCT: transactionCategory.other,
    'STEAMGAMES.COM 4259522985': transactionCategory.games,
    'UDEMY: ONLINE COURSES': transactionCategory.learning,
    'HBO MAX': transactionCategory.recreation,
    Straksbetaling: transactionCategory.vipps,
    vipps: transactionCategory.vipps,
    BUNNYCDN: transactionCategory.other,
    fond: transactionCategory.investment,
    joker: transactionCategory.groceries,
    mcdonalds: transactionCategory.dining,
    oda: transactionCategory.groceries,
    digg: transactionCategory.dining,
    steam: transactionCategory.games,
    kiwi: transactionCategory.groceries,
    clasohlson: transactionCategory.home,
    musti: transactionCategory.pet,
    odeon: transactionCategory.recreation,
    mix: transactionCategory.food,
    restaurant: transactionCategory.dining,
    extra: transactionCategory.groceries,
    applestore: transactionCategory.apple,
    bensinstasjon: transactionCategory.transport,
    transfer: transactionCategory.transfer,
    recreation: transactionCategory.recreation,
    bus: transactionCategory.transfer,
};

export const TransactionCategoryMapper = (name: string) => {
    const realName = getRealName(name);
    return category[realName] || transactionCategory.unknown;
};

//Changes names such as 'Oda.com - xnhxe5' to 'Oda.com'
//Created function for further improvements and changes to name mapper
const getRealName = (name: string) => {
    const n = name.toLowerCase();
    if ((n.indexOf('fra: ') === 0 || n.indexOf('til: ') === 0) && n.includes('betalt: ')) return 'transfer';
    if (n.indexOf('fra: ') === 0 || n.indexOf('til: ') === 0 || n.startsWith('vipps ')) return 'vipps';
    if (n.includes('joker')) return 'joker';
    if (n.includes("mcdonald's")) return 'mcdonalds';
    if (n.includes('oda.com')) return 'oda';
    if (n.includes('digg pizza')) return 'digg';
    if (n.includes('steamgames.com') || n.startsWith('steam purchase')) return 'steam';
    if (n.includes('verdipapirhandel')) return 'fond';
    if (n.includes('kiwi')) return 'kiwi';
    if (n.includes('clas ohl')) return 'clasohlson';
    if (n.includes('musti')) return 'musti';
    if (n.includes('odeon')) return 'odeon';
    if (n.includes('mix')) return 'mix';
    if (n.includes('restaura') || n.includes('pizza')) return 'restaurant';
    if (n.includes('extra')) return 'extra';
    if (n.includes('hbo max')) return 'recreation';
    if (n.includes('apple.com')) return 'applestore';
    if (n.includes('circle k')) return 'bensinstasjon';
    if (n.includes('nettbuss')) return 'bus';
    return name;
};
