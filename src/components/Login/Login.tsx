import React from 'react';
import c from './Login.module.css';
import {RootState, useAppDispatch} from '../../redux/store-redux';
import {loginTC } from '../../redux/authReducer';
import {useForm, SubmitHandler } from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {useSelector} from 'react-redux';
import { Navigate } from "react-router-dom";
import {setLoadingStatusAC} from '../../redux/appReducer';

type Inputs = {
    login: string
    password: string
    phone: number
    multipleErrorInput: string
}

export const Login = () => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const dispatch = useAppDispatch()
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>({
        criteriaMode: 'all'
    });
    const emailRegex = /^\S+@\S+\.\S+$/;

    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(loginTC(data.login, data.password))
    }

    if (isAuth) {
        return <Navigate to={'/basket'}/>
    }

    return (
        <div className={c.container}>
            <div className={c.loginForm}>
                <form onSubmit={handleSubmit(onSubmit)} className={c.formWrapper}>
                    <h1>Форма логина</h1>
                    <input
                        {...register('login', {
                            required: 'Ввод почты обязателен (ваша почта)',
                            pattern: {
                                value: emailRegex,
                                message: 'Некорректный формат почты'
                            },
                            maxLength: {
                                value: 50,
                                message: 'Максимум 50 символов'
                            }
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="login"
                        render={({messages}) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                                : null;
                        }}
                    />

                    <input type='password'
                        {...register('password', {
                            required: 'Ввод пароля обязателен',
                            // pattern: {
                            //     value: /\d+/,
                            //     message: 'This input is number only.'
                            // },
                            minLength: {
                                value: 5,
                                message: 'Минимум 5 символов'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Максимум 20 символов'
                            }
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({messages}) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                                : null;
                        }}
                    />

                    <input type="submit"/>
                </form>
            </div>

        </div>

    )
};





