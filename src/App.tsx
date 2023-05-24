import React from 'react';
import s from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {Copch} from './components/Products/Copch';
import {Poly} from './components/Products/Poly';
import {Login} from './components/Login/Login';
import {Registration} from './components/Registration/Registration';
import {Footer} from './components/Footer/Footer';
import {Cold} from './components/Products/Cold';
import {
    BASKET_ROUTE,
    COLD_ROUTE,
    COPCH_ROUTE,
    LOGIN_ROUTE, ORDERS_ROUTE,
    POLY_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from './utils/consts';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from './redux/store-redux';
import {Orders} from './components/UserOrders/Orders';
import {ProgressBar} from './common/ProgressBar/ProgressBar';
import {Cart} from './components/Cart/Cart';
import {CommonProductType} from './redux/productsReducer';


function App() {

    const copchProduct = useSelector<RootState, CommonProductType[]>(state => state.productsPage[1])

    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appContent}>
                <Routes>
                    <Route index element={<Copch products={copchProduct} />}/>
                    <Route path={COPCH_ROUTE} element={<Copch products={copchProduct}/>}/>
                    <Route path={POLY_ROUTE} element={<Poly/>}/>
                    <Route path={COLD_ROUTE} element={<Cold/>}/>
                    <Route path={LOGIN_ROUTE} element={<Login/>}/>
                    <Route path={REGISTRATION_ROUTE} element={<Registration/>}/>
                    <Route path={BASKET_ROUTE} element={<Cart/>}/>
                    <Route path={ORDERS_ROUTE} element={<Orders/>}/>
                    <Route path="*" element={<div>Page not found</div>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
};

export default App;
