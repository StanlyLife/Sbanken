import React from 'react';
import { AccountResolver } from './initializers/accountResolver';
import { authResolver } from './initializers/authResolver';
import { TransactionResolver } from './initializers/transactionResolver';
import { Home } from './routes/home/home';
import './scss/main.scss';
import './scss/fonts.scss';
import 'react-circular-progressbar/dist/styles.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
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
