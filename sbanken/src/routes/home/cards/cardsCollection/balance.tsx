import { useApiStore } from '../../../../stores/useApiStore';

export const Balance = () => {
    const { activeAccount_store } = useApiStore();

    return (
        <>
            {activeAccount_store && (
                <div className='card balance-component'>
                    <p className='key'>Balanse</p>
                    <p className='value'>{Math.round(activeAccount_store.balance)}kr</p>
                </div>
            )}
        </>
    );
};
