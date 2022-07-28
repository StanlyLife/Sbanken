import { useApiStore } from '../../../../stores/useApiStore';

export const AvailableBalance = () => {
    const { activeAccount_store } = useApiStore();

    return (
        <>
            {activeAccount_store && (
                <div className='card available-balance-component'>
                    <p className='key'>Saldo</p>
                    <p className='value'>{Math.round(activeAccount_store.available)}kr</p>
                </div>
            )}
        </>
    );
};
