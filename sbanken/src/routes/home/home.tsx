import React from 'react';
import './home.scss';
import { AppSidebar } from './appSidebar/appSidebar';
import { HomeWrapper } from './homeWrapper/homeWrapper';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppHeader } from './appHeader/appHeader';
import { Categories } from '../categories/categories';
import { Grids } from '../grids/grids';
export const Home = () => {
    return (
        <BrowserRouter>
            <div className='home-component'>
                <div className='home-component-sidebar'>
                    <AppSidebar />
                </div>
                <div className='home-component-main'>
                    <div className='home-component-header'>
                        <AppHeader />
                    </div>
                    <div className='home-component-overview'>
                        <Routes>
                            <Route path='/' element={<HomeWrapper />} />
                            <Route path='/categories' element={<Categories />} />
                            <Route path='/grids' element={<Grids />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
