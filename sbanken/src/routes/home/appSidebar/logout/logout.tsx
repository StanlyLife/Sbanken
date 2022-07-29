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
    const { setLogin_store, setErrorMessage_store } = useApiStore();
    const LogoutApp = () => {
        console.log('logout');
        window.localStorage.removeItem('apikey');
        window.localStorage.removeItem('apisecret');
        setLogin_store(logoutObject);
        setErrorMessage_store({});
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
