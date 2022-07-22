import React from 'react';
import { OverviewProgress } from './overviewProgress/overviewProgress';
import './home.scss';
import { AppHeader } from './appHeader/appHeader';
export const Home = () => {
    return (
        <div className='home-component'>
            <AppHeader />
            <OverviewProgress />
        </div>
    );
};
