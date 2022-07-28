import { useDateStore } from '../../../stores/useDateStore';

export const HeaderDatesDispaly = () => {
    const { endDate_store, startDate_store } = useDateStore();
    return (
        <p className='date-time'>
            {startDate_store &&
                `${new Date(startDate_store).toLocaleDateString('no-nb', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })} - `}
            {endDate_store
                ? new Date(endDate_store).toLocaleDateString('no-nb', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                  })
                : //Default date
                  `${new Date().toLocaleDateString('no-nb', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                  })} - siste 30 dager`}
        </p>
    );
};
