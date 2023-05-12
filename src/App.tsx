import React from 'react';
import s from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import {Header} from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import {SmokedMeat} from './components/SmokedMeat/SmokedMeat';
import {SemiFinishedMeat} from './components/SemiFinishedMeat/SemiFinishedMeat';
import {ColdMeat} from './components/ColdMeat/ColdMeat';
import {Login} from './components/Login/Login';
function App  () {

    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appContent}>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/smokedMeat/*" element={<SmokedMeat/>}/>
                    <Route path="/semiFinishedMeat/*" element={<SemiFinishedMeat/>}/>
                    <Route path="/coldMeat/" element={<ColdMeat/>}/>
                </Routes>
            </div>
        </div>
    )
};

export default App;
