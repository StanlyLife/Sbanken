import {
    faAppleAlt,
    faArrowRightArrowLeft,
    faBasketShopping,
    faBurger,
    faBus,
    faCartShopping,
    faCreditCard,
    faFaceLaughBeam,
    faGamepad,
    faGraduationCap,
    faHouse,
    faMobileAlt,
    faMoneyBillTransfer,
    faPaw,
    faPiggyBank,
    faQuestion,
    faUtensilSpoon,
    faWarning,
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
        //Categories
        unknown: <FontAwesomeIcon icon={faQuestion} />,
        food: <FontAwesomeIcon icon={faBurger} />,
        recreation: <FontAwesomeIcon icon={faFaceLaughBeam} />,
        transport: <FontAwesomeIcon icon={faBus} />,
        games: <FontAwesomeIcon icon={faGamepad} />,
        learning: <FontAwesomeIcon icon={faGraduationCap} />,
        vipps: <FontAwesomeIcon icon={faMobileAlt} />,
        other: <FontAwesomeIcon icon={faQuestion} />,
        investment: <FontAwesomeIcon icon={faPiggyBank} />,
        dining: <FontAwesomeIcon icon={faUtensilSpoon} />,
        groceries: <FontAwesomeIcon icon={faBasketShopping} />,
        home: <FontAwesomeIcon icon={faHouse} />,
        pet: <FontAwesomeIcon icon={faPaw} />,
        apple: <FontAwesomeIcon icon={faAppleAlt} />,
    };
    const icon = iconTypes[t];
    return icon || <FontAwesomeIcon icon={faWarning} />;
};
