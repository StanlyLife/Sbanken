import React from 'react';
import './home.scss';
import { AppHeader } from './appHeader/appHeader';
import { AppSidebar } from './appSidebar/appSidebar';
import { HomeWrapper } from './homeWrapper/homeWrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<HomeWrapper />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
};
