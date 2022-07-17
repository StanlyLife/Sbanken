import { useEffect } from 'react';
import { baseUrl, getAccountsUrl } from '../utils/sbankenApi';
const axios = require('axios');

export const accountResolver = () => {
    useEffect(() => {
        initializer();
    }, []);
    const initializer = async () => {
        const url = baseUrl + getAccountsUrl;
        const headers = {
            Authorization: 'Bearer ' + basicAuthentationHeaderValue,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        const axiosConfig = {
            method: 'post',
            url: url,
            headers: headers,
            data: 'grant_type=client_credentials',
        };
        axios(axiosConfig).then(
            (res: any) => {
                console.log(res.data.access_token);
            },
            (err: any) => {
                console.log('error retrieving auth token');
                console.log(err);
            },
        );
    };
};
