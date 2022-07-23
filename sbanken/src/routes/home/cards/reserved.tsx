import { useApiStore } from '../../../stores/useApiStore';

export const Reserved = () => {
    const { activeAccount_store } = useApiStore();

    return (
        <div className='card reserved-component'>
            <p className='key'>Reservert</p>
            <p className='value'>{Math.round(activeAccount_store.balance - activeAccount_store.available)}kr</p>
        </div>
    );
};
