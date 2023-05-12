import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import c from './Login.module.css';


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="firstName">Логин (E-mail)</label>
                <Field type="text" component="input" name="login"/>
            </div>
            <div>
                <label htmlFor="firstName">Пароль</label>
                <Field type="password" component="input" name="password"/>
            </div>
            <div>
                <label htmlFor="firstName">Запомнить</label>
                <Field type="checkbox" component="input" name="rememberMe"/>
            </div>
            <div>
                <Button type="submit" variant="outlined">Вход</Button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)         //data from fields
    }

    const toTelegramClickHandler = () => {
        window.open('https://oauth.telegram.org/auth?bot_id=5926919919&origin=http%3A%2F%2Fbibak007.pythonanywhere.com&embed=1&request_access=write&return_to=http%3A%2F%2Fbibak007.pythonanywhere.com%2F', '_blank'); // переходим на новый URL при клике на кнопку
    };
    const toRegistrationClickHandler = () => {

    };

    return (
        <div className={c.container}>
            <div className={c.formWrapper}>
                <h1>Вход</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
            <div>
                <Button variant="outlined"
                        size="medium"
                        onClick={toRegistrationClickHandler}>
                    Регистрация
                </Button>
            </div>
            <div>
                <Button variant="outlined"
                        size="medium"
                        startIcon={<TelegramIcon/>}
                        onClick={toTelegramClickHandler}>
                    Войти через telegram
                </Button>
            </div>
        </div>
    )
        ;
};




