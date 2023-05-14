import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import Button from '@mui/material/Button';
import {getCookie} from '../csrftoken';

export type LoginFormDataType = {
    loginEmail: string
    loginPassword: string
    // rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="firstName">Логин (E-mail)</label>
                <Field type="text" component="input" name="loginEmail"/>
            </div>
            <div>
                <label htmlFor="firstName">Пароль</label>
                <Field type="password" component="input" name="loginPassword"/>
            </div>
            {/*<div>*/}
            {/*    <label htmlFor="firstName">Запомнить</label>*/}
            {/*    <Field type="checkbox" component="input" name="rememberMe"/>*/}
            {/*</div>*/}
            <div>
                <Button type="submit" variant="outlined">Вход</Button>
            </div>
        </form>
    );
};
export const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)