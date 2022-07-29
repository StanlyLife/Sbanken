import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useApiStore } from '../../stores/useApiStore';
import './login.scss';

interface loginInformation {
    apiKey: string;
    apiSecret: string;
    isTestData: boolean;
    isLoggedIn: boolean;
}

export const Login = () => {
    const { setLogin_store } = useApiStore();
    const apiKeyInput = useRef<HTMLInputElement>(null);
    const apiSecretInput = useRef<HTMLInputElement>(null);
    const Login = () => {
        const loginObject: loginInformation = {
            apiKey: apiKeyInput?.current?.value || '',
            apiSecret: apiSecretInput?.current?.value || '',
            isTestData: false,
            isLoggedIn: true,
        };
        console.log(loginObject);
        setLogin_store(loginObject);
    };
    return (
        <div className='login-component'>
            <div className='login-block'>
                <div className='info'>
                    <h1 className='title'>Sbanken Forbruk</h1>
                    <hr />
                    <p className='sub-text'>by Stian Håve</p>
                </div>
                <div className='form'>
                    <div className='form-row'>
                        <label>API Key</label>
                        <div className='input'>
                            <input ref={apiKeyInput} /> <FontAwesomeIcon className='icon' icon={faCircleQuestion} />
                        </div>
                    </div>
                    <div className='form-row'>
                        <label>API Secret</label>
                        <div className='input'>
                            <input ref={apiSecretInput} /> <FontAwesomeIcon className='icon' icon={faCircleQuestion} />
                        </div>
                    </div>
                </div>
                <div className='buttons'>
                    <div className='input'>
                        <button className='login' onClick={Login}>
                            Login
                        </button>
                    </div>
                    <div className='input'>
                        <button className='test'>Test</button>
                        <FontAwesomeIcon
                            icon={faCircleQuestion}
                            className='icon'
                            title='Test the application with test data, no login information required'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
