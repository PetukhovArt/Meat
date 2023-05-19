import React from 'react';
import s from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {Copch} from './components/Shop/Copch';
import {Poly} from './components/Shop/Poly';
import {Login} from './components/Login/Login';
import {Registration} from './components/Registration/Registration';
import {Footer} from './components/Footer/Footer';
import {Cold} from './components/Shop/Cold';
import {Basket} from './components/Basket/Basket';
import {
    BASKET_ROUTE,
    COLD_ROUTE,
    COPCH_ROUTE,
    LOGIN_ROUTE,
    POLY_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from './utils/consts';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from './redux/store-redux';


function App() {

    const copchProduct = useSelector((state: RootState) => state.productsPage.copch)
    const loadStatus = useSelector((state: RootState) => state.app.status)


    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            {/*<Subheader/>*/}
            <div className={s.appContent}>
                <Routes>
                    <Route index element={<Copch products={copchProduct} loadStatus={loadStatus}/>}/>
                    <Route path={COPCH_ROUTE} element={<Copch products={copchProduct} loadStatus={loadStatus}/>}/>
                    <Route path={POLY_ROUTE} element={<Poly/>}/>
                    <Route path={COLD_ROUTE} element={<Cold/>}/>
                    <Route path={LOGIN_ROUTE} element={<Login/>}/>
                    <Route path={REGISTRATION_ROUTE} element={<Registration/>}/>
                    <Route path={BASKET_ROUTE} element={<Basket/>}/>
                    <Route path="*" element={<div>Page not found</div>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
};

export default App;
