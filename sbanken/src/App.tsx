import React from 'react';
import { AccountResolver } from './initializers/accountResolver';
import { authResolver } from './initializers/authResolver';
import { TransactionResolver } from './initializers/transactionResolver';
import { Home } from './routes/home/home';
import './scss/main.scss';
import 'react-circular-progressbar/dist/styles.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
function App() {
    authResolver();
    return (
        <div className='App-Root'>
            <header className='App-header'></header>
            <main>
                <Home />
                <AccountResolver />
                <TransactionResolver />
            </main>
        </div>
    );
}

export default App;
