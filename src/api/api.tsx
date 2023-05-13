import axios from 'axios';
import {RegistrFormDataType} from '../components/RegistrationForm/RegistrationReduxForm';


const instance = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: 'https://bibak007.pythonanywhere.com/'
})

export const productsAPI = {
    getSmokedProducts: function () {
        return instance.get(`copch/`)
            .then(res => res.data)
    },
}
export const authAPI = {
    reg: function ({...formData}: RegistrFormDataType) {
        return instance.post(`registr/`, JSON.stringify(formData))
            .then(res => res.data)
    },

//accounts/login/
    login: function (email: string, password: string) {
        instance.post('log/', {email, password})
            .then(response => response.data)
    },

    logout: function () {
        return instance.delete(`api-authlogout/`).then(res => res.data)
    },
}