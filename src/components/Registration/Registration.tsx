import React, {useState} from 'react';
import Button from '@mui/material/Button';
import c from './Rgistration.module.css';
import {RegistrationReduxForm, RegistrFormDataType} from '../Forms/RegistrationReduxForm';
import {RootState, useAppDispatch} from '../../redux/store-redux';
import {registrationTC} from '../../redux/authReducer';
import { useNavigate } from 'react-router-dom';

export const Registration = (props: any) => {


    // const copchProduct = useSelector((state: RootState) => state.productPage)
    const dispatch=useAppDispatch()

    const navigate = useNavigate();

    const onSubmitRegistration = (formData: RegistrFormDataType) => {
        dispatch(registrationTC({...formData}))
    }


    return (
            <div className={c.container}>
                <div className={c.formWrapper}>
                    <h1>Регистрация</h1>
                    <RegistrationReduxForm onSubmit={onSubmitRegistration}/>
                </div>
                <div>
                    Есть аккаунт?
                    <Button variant="outlined"
                            size="medium"
                            onClick={() => navigate('/login')}>
                        Вход
                    </Button>
                </div>
            </div>
    )
}




