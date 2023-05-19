import axios, {AxiosResponse} from 'axios';
import {RegistrFormDataType} from '../components/Forms/RegistrationReduxForm';


const token = localStorage.getItem('token');
const instance = axios.create({
    baseURL: 'https://bibak007.pythonanywhere.com/',
    headers: {
        'Content-Type': 'application/json',
    }
})

export const productsAPI = {
    getCopch: function () {
        return instance.get(`copch/`).then(res => res.data)
    },
    getPoly: function () {
        return instance.get(`poly/`).then(res => res.data)
    },
    getCold: function () {
        return instance.get(`cold/`).then(res => res.data)
    },
}

export const authAPI = {

    // me: function () {
    //     return instance.get(`auth/users/me/`).then(res => res.data)
    // },

    reg: function ({...formData}: RegistrFormDataType) {
        return instance.post(`registr/`, JSON.stringify(formData)).then(res => res.data)
    },

    login: function (email: string, password: string) {
        return instance.post('log/', {email, password})
            // .then(res => {
            //     localStorage.setItem('token', res.data.auth_token)
            // })
        // return instance.post('auth/token/login/', {email, password})
        //     .then(res => {
        //         localStorage.setItem('token', res.data.auth_token)
        //     })
    },
    getOrders: function () {
        return instance.get('order/', {headers: {'Authorization': `Token ${token}`}})
            .then(res=> res.data)
    },

    // logout: function () {
    //     return instance.delete(`api-authlogout/`)
    //         .then(res => res.data)
    // },
}
export interface MyAxiosResponse<T = any> extends AxiosResponse<T> {
    startsWith: (str: string) => boolean;
}