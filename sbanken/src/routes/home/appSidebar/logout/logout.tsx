import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useApiStore } from '../../../../stores/useApiStore';
const logoutObject = {
    apiKey: '',
    apiSecret: '',
    isTestData: false,
    isLoggedIn: false,
};
export const Logout = () => {
    const { setLogin_store } = useApiStore();
    const LogoutApp = () => {
        console.log('logout');
        setLogin_store(logoutObject);
    };
    return (
        <div className='log-out-component'>
            <button className='logout' onClick={LogoutApp}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Logg ut
            </button>
        </div>
    );
};
