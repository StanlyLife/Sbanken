import {
    faArrowRightArrowLeft,
    faBasketShopping,
    faCartShopping,
    faCreditCard,
    faMobileAlt,
    faMoneyBillTransfer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*
returns icon based on transaction type
*/

export const TransactionTypeIconMapper = (t: string) => {
    const iconTypes = {
        Varekjøp: <FontAwesomeIcon icon={faBasketShopping} />,
        'Bekreftet VISA': <FontAwesomeIcon icon={faCartShopping} />,
        'Vipps straksbet.': <FontAwesomeIcon icon={faMobileAlt} />,
        Straksbetaling: <FontAwesomeIcon icon={faMobileAlt} />,
        Visa: <FontAwesomeIcon icon={faCreditCard} />,
        Overførsel: <FontAwesomeIcon icon={faArrowRightArrowLeft} />,
        Overføring: <FontAwesomeIcon icon={faMoneyBillTransfer} />,
    };
    const icon = iconTypes[t];
    return icon;
    // return <FontAwesomeIcon icon={faWarning} />;
};
