import {
    faAppleAlt,
    faBowlFood,
    faBus,
    faCreditCard,
    faDigitalTachograph,
    faFilm,
    faGamepad,
    faMoneyBill,
    faMoneyBillTransfer,
    faMusic,
    faTaxi,
    faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { transactionCategory } from '../enums/transactionCategory';
import { TransactionCategoryMapper } from './transactionCategoryMapper';

export const TransactionIconMapper = (name: string) => {
    const category = TransactionCategoryMapper(name);
    const transactions = {
        'APPLE.COM/BILL': (
            <FontAwesomeIcon icon={faAppleAlt} className={`color ${category && transactionCategory[category]}`} />
        ),
        'Oda.com - xnhxe5': (
            <FontAwesomeIcon icon={faBowlFood} className={`color ${category && transactionCategory[category]}`} />
        ),
        'WEORDER* DIGG PIZZA': (
            <FontAwesomeIcon icon={faBowlFood} className={`color ${category && transactionCategory[category]}`} />
        ),
        'Bekreftet VISA': (
            <FontAwesomeIcon icon={faCreditCard} className={`color ${category && transactionCategory[category]}`} />
        ),
        'ODEON KINO APP': <FontAwesomeIcon icon={faFilm} className={`color ${category && transactionCategory[category]}`} />,
        'Kygo 2022 / Sky Agency': (
            <FontAwesomeIcon icon={faMusic} className={`color ${category && transactionCategory[category]}`} />
        ),
        RUTERAPPEN: <FontAwesomeIcon icon={faBus} className={`color ${category && transactionCategory[category]}`} />,
        RUTERBILLETT: <FontAwesomeIcon icon={faBus} className={`color ${category && transactionCategory[category]}`} />,
        'Yandex.Taxi': <FontAwesomeIcon icon={faTaxi} className={`color ${category && transactionCategory[category]}`} />,
        TRADINGVIEW1PRODUCT: (
            <FontAwesomeIcon icon={faMoneyBill} className={`color ${category && transactionCategory[category]}`} />
        ),
        'STEAMGAMES.COM 4259522985': (
            <FontAwesomeIcon icon={faGamepad} className={`color ${category && transactionCategory[category]}`} />
        ),
        'UDEMY: ONLINE COURSES': (
            <FontAwesomeIcon icon={faUniversity} className={`color ${category && transactionCategory[category]}`} />
        ),
        'HBO MAX': <FontAwesomeIcon icon={faFilm} className={`color ${category && transactionCategory[category]}`} />,
        Straksbetaling: (
            <FontAwesomeIcon icon={faMoneyBillTransfer} className={`color ${category && transactionCategory[category]}`} />
        ),
        BUNNYCDN: (
            <FontAwesomeIcon icon={faDigitalTachograph} className={`color ${category && transactionCategory[category]}`} />
        ),
    };
    return transactions[name];
};
