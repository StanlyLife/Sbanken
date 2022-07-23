import React from 'react';
import './home.scss';
import { AppHeader } from './appHeader/appHeader';
import { AppSidebar } from './appSidebar/appSidebar';
import { HomeWrapper } from './homeWrapper/homeWrapper';
export const Home = () => {
    return (
        <div className='home-component'>
            <div className='home-component-sidebar'>
                <AppSidebar />
            </div>
            <div className='home-component-main'>
                <div className='home-component-header'>
                    <AppHeader />
                </div>
                <div className='home-component-overview'>
                    <HomeWrapper />
                </div>
            </div>
        </div>
    );
};
