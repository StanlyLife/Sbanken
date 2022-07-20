import React from 'react';
import { OverviewProgress } from './overviewProgress/overviewProgress';
import './home.scss';
export const Home = () => {
    return (
        <div className='home-component'>
            <header>
                <h1 className='title'>Sbanken forbruk</h1>
            </header>
            <OverviewProgress />
        </div>
    );
};
