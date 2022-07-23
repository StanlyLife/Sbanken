import './creditcard.scss';
export const Creaditcard = () => {
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
                    <div className='number'>1234 5678 91012 3456</div>
                    <div className='name'>MAAHI</div>
                    <div className='from'>01/21</div>
                    <div className='to'>12/25</div>
                </div>
            </div>
        </div>
    );
};
