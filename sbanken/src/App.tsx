import React from 'react';
import { authResolver } from './initializers/authResolver';
import './scss/main.scss';
function App() {
    authResolver();
    return (
        <div className='App-Root'>
            <header className='App-header'></header>
            <main>
                <h1>app</h1>
            </main>
        </div>
    );
}

export default App;
