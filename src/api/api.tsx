import axios from 'axios';
import {RegistrFormDataType} from '../components/Forms/RegistrationReduxForm';


const token = localStorage.getItem('token');
const instance = axios.create({
    baseURL: 'https://bibak007.pythonanywhere.com/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
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

    me: function () {
        return instance.get(`auth/users/me/`).then(res => res.data)
    },

    reg: function ({...formData}: RegistrFormDataType) {
        return instance.post(`registr/`, JSON.stringify(formData)).then(res => res.data)
    },

//accounts/login/
    login: function (email: string, password: string) {
        return instance.post('auth/token/login/', {email, password})
            .then(res => localStorage.setItem('token', res.data.auth_token))
            .then(() => {
                instance.get('order/')
                    .then(res => console.log(res.data))
            })

    },

    logout: function () {
        return instance.delete(`api-authlogout/`)
            .then(res => res.data)
    },
}