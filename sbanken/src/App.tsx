import React, { useEffect } from 'react';
import apiKey, { apiSecret } from './utils/secrets';
const axios = require('axios');
function App() {
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
                console.log('res');
                console.log(res.data.access_token);
            },
            (err: any) => {
                console.log('Error');
                console.log(err);
            },
        );
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <p>
                    Edit
                    <code>src/App.js</code>
                </p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
