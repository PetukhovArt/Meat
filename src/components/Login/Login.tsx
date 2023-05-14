import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import c from './Login.module.css';
import {LoginFormDataType, LoginReduxForm} from '../Forms/LoginReduxForm';
import {RegistrationReduxForm, RegistrFormDataType} from '../Forms/RegistrationReduxForm';
import {RootState, useAppDispatch} from '../../redux/store-redux';
import {getAuthTC, loginTC, registrationTC} from '../../redux/authReducer';
import {useNavigate} from 'react-router-dom';


export const Login = () => {

    // const copchProduct = useSelector((state: RootState) => state.productPage)
    const dispatch=useAppDispatch()

    useEffect(() => {
        dispatch(getAuthTC())
    }, []);


    const onSubmitLogin = (formData: LoginFormDataType) => {
            dispatch(loginTC(formData.loginEmail, formData.loginPassword))
    }

    // const toTelegramClickHandler = () => {
    //     window.open('https://oauth.telegram.org/auth?bot_id=5926919919&origin=http%3A%2F%2Fbibak007.pythonanywhere.com&embed=1&request_access=write&return_to=http%3A%2F%2Fbibak007.pythonanywhere.com%2F', '_blank'); // переходим на новый URL при клике на кнопку
    // };
    const navigate = useNavigate();


    return (
        <div className={c.container}>
            <div className={c.formWrapper}>
                <h1>Вход</h1>
                <LoginReduxForm onSubmit={onSubmitLogin}/>
            </div>
            <div>
                Нет аккаунта?
                <Button variant="outlined"
                        size="medium"
                        onClick={() => navigate('/registration')}>
                    Регистрация
                </Button>
            </div>
        </div>

    )
    {/*<div>*/}
    {/*    <Button variant="outlined"*/}
    {/*            size="medium"*/}
    {/*            startIcon={<TelegramIcon/>}*/}
    {/*            onClick={toTelegramClickHandler}>*/}
    {/*        Войти через telegram*/}
    {/*    </Button>*/}
    {/*</div>*/}
        ;
};




