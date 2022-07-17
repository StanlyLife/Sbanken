import { useEffect } from 'react';
import { useApiStore } from '../stores/useApiStore';
import apiKey, { apiSecret } from '../utils/secrets';
const axios = require('axios');

export const authResolver = () => {
    const { setBearerToken_store } = useApiStore();
    useEffect(() => {
        initializer();
    }, []);
    const initializer = async () => {
        const identityServerUrl = 'https://auth.sbanken.no/identityserver/connect/token';
        const basicAuthentationHeaderValue = btoa(encodeURIComponent(apiKey) + ':' + encodeURIComponent(apiSecret));
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
            },
            (err: any) => {
                console.log('error retrieving auth token');
                console.log(err);
            },
        );
    };
};
