import React from 'react';
import { authResolver } from './initializers/authResolver';
import './scss/main.scss';
import './scss/fonts.scss';
import 'react-circular-progressbar/dist/styles.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Login } from './routes/login/login';
import { useApiStore } from './stores/useApiStore';
import { AccountResolver } from './initializers/accountResolver';
import { TransactionResolver } from './initializers/transactionResolver';
import { Home } from './routes/home/home';
function App() {
    authResolver();
    const { login_store } = useApiStore();
    return (
        <div className='App-Root'>
            <header className='App-header'></header>
            <main>
                {login_store.isLoggedIn && login_store ? (
                    <>
                        <Home />
                        <AccountResolver />
                        <TransactionResolver />
                    </>
                ) : (
                    <Login />
                )}
            </main>
        </div>
    );
}

export default App;
