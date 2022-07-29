import { useEffect, useState } from 'react';
import { useApiStore } from '../stores/useApiStore';
const axios = require('axios');

export const authResolver = () => {
    const { setBearerToken_store, login_store, setLogin_store, setErrorMessage_store } = useApiStore();
    const [amountOfFailedLogins, setAmountOfFailedLogins] = useState<number>(1);
    useEffect(() => {
        if (!login_store.apiKey || !login_store.apiSecret) return;
        initializer();
    }, [login_store]);
    const initializer = async () => {
        const identityServerUrl = 'https://auth.sbanken.no/identityserver/connect/token';
        const basicAuthentationHeaderValue = btoa(
            encodeURIComponent(login_store.apiKey) + ':' + encodeURIComponent(login_store.apiSecret),
        );
        const headers = {
            Authorization: 'Basic ' + basicAuthentationHeaderValue,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        const axiosConfig = {
            method: 'post',
            url: identityServerUrl,
            headers: headers,
            data: 'grant_type=client_credentials',
        };
        axios(axiosConfig).then(
            (res: any) => {
                setBearerToken_store(res.data.access_token);
                const loginObject = setLogin_store;
                loginObject.isLoggedIn = true;
                setLogin_store(loginObject);
            },
            (err: any) => {
                console.log('error retrieving auth token');
                if (err.response.status === 500) {
                    const errorMessage = {
                        login: `Feil innloggings informasjon, antall ganger feilet: ${amountOfFailedLogins}`,
                    };
                    setErrorMessage_store(errorMessage);
                    setAmountOfFailedLogins((prev) => (prev += 1));
                }
            },
        );
    };
};
