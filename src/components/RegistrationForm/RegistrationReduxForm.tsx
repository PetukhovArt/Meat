import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import Button from '@mui/material/Button';

export type RegistrFormDataType = {
    email: string, password:string,
    password2:string,name:string,
    lastname:string,phone:number
}
const RegistrationForm: React.FC<InjectedFormProps<RegistrFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="Email">E-mail</label>
                <Field type="text" component="input" name="email"/>
            </div>
            <div>
                <label htmlFor="Password">Пароль</label>
                <Field type="password" component="input" name="password"/>
            </div>
            <div>
                <label htmlFor="Password2">Подтвердить пароль</label>
                <Field type="password" component="input" name="password2"/>
            </div>
            <div>
                <label htmlFor="Name">Ваше Имя</label>
                <Field type="text" component="input" name="name"/>
            </div>
            <div>
                <label htmlFor="LastName">Ваша Фамилия</label>
                <Field type="text" component="input" name="lastname"/>
            </div>
            <div>
                <label htmlFor="Phone">Телефон</label>
                <Field type="number" component="input" name="phone"/>
            </div>
            <div>
                <Button type="submit" variant="outlined">Зарегистрироваться</Button>
            </div>
        </form>
    );
};
export const RegistrationReduxForm = reduxForm<RegistrFormDataType>({form: 'login'})(RegistrationForm)