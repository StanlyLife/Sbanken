import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import { useApiStore } from '../../stores/useApiStore';
import './login.scss';

interface loginInformation {
    apiKey: string;
    apiSecret: string;
    isTestData: boolean;
    isLoggedIn: boolean;
}

export const Login = () => {
    const { setLogin_store, errorMessage_store } = useApiStore();
    const apiKeyInput = useRef<HTMLInputElement>(null);
    const apiSecretInput = useRef<HTMLInputElement>(null);

    //initialize login if localstorage has been set
    useEffect(() => {
        const key = window.localStorage.getItem('apikey');
        const secret = window.localStorage.getItem('apisecret');
        if (!key || !secret) return;
        //Set inputs to match local store
        if (apiKeyInput.current) apiKeyInput.current.value = key;
        if (apiSecretInput.current) apiSecretInput.current.value = secret;
        const loginObject: loginInformation = {
            apiKey: key,
            apiSecret: secret,
            isTestData: false,
            isLoggedIn: false,
        };
        setLogin_store(loginObject);
    }, []);

    const setLocalStoreData = () => {
        const key = apiKeyInput?.current?.value;
        const secret = apiSecretInput?.current?.value;
        if (!key || !secret) return;
        window.localStorage.setItem('apikey', key);
        window.localStorage.setItem('apisecret', secret);
    };
    const Login = () => {
        const loginObject: loginInformation = {
            apiKey: apiKeyInput?.current?.value || '',
            apiSecret: apiSecretInput?.current?.value || '',
            isTestData: false,
            isLoggedIn: false,
        };
        setLocalStoreData();
        setLogin_store(loginObject);
    };

    const Test = () => {
        const loginObject: loginInformation = {
            apiKey: apiKeyInput?.current?.value || '',
            apiSecret: apiSecretInput?.current?.value || '',
            isTestData: true,
            isLoggedIn: true,
        };
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
                            <input ref={apiKeyInput} />{' '}
                            <a
                                title='Howto: Api key'
                                target='_blank'
                                href='https://github.com/StanlyLife/Sbanken#:~:text=Personal/ApiBeta/Info/-,Api%20Key,the%20image%20(The%20api%20key%20shown%20is%20not%20my%20actual%20key),-Api%20Secret'
                                rel='noreferrer'
                            >
                                <FontAwesomeIcon className='icon' icon={faCircleQuestion} />
                            </a>
                        </div>
                    </div>
                    <div className='form-row'>
                        <label>API Secret</label>
                        <div className='input'>
                            <input ref={apiSecretInput} />{' '}
                            <a
                                title='Howto: Api secret'
                                target='_blank'
                                href='https://github.com/StanlyLife/Sbanken#:~:text=my%20actual%20key)-,Api%20Secret,Order%20new%20password,-Fill%20out%20the'
                                rel='noreferrer'
                            >
                                <FontAwesomeIcon className='icon' icon={faCircleQuestion} />
                            </a>
                        </div>
                    </div>
                    <div className='errors'>
                        {errorMessage_store.login && <p className='error'>{errorMessage_store.login}</p>}
                    </div>
                </div>
                <div className='buttons'>
                    <div className='input'>
                        <button className='login' onClick={Login}>
                            Login
                        </button>
                    </div>
                    <div className='input'>
                        <button className='test' onClick={Test}>
                            Test
                        </button>
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
