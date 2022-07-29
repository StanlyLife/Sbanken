import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logout = () => {
    return (
        <div className='log-out-component'>
            <button className='logout'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Logg ut
            </button>
        </div>
    );
};
