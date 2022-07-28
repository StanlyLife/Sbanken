import './creditcard.scss';
export const Creaditcard = ({
    accountNumber,
    balance,
    name,
    available,
}: {
    accountNumber: string;
    balance: string;
    name: string;
    available: string;
}) => {
    const accountNumberWithSpaces = accountNumber.replace(/\d{4}(?=.)/g, '$& ');
    //https://codepen.io/maahi21/pen/rNWzdjG
    return (
        <div className='credit-card-component'>
            <div className='main'>
                <div className='card'>
                    <img
                        className='visa'
                        src='https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png'
                        width='50'
                    />
                    <img
                        className='chip'
                        src='https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png'
                        width='40'
                    />
                    <div className='number'>{accountNumberWithSpaces}</div>
                    <div className='name'>{name}</div>
                    <div className='from'>{Math.round(+balance)}kr</div>
                    <div className='to'>{Math.round(+available)}kr</div>
                </div>
            </div>
        </div>
    );
};
