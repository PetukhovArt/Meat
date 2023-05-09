import axios from 'axios';

const instance = axios.create({baseURL: 'https://bibak007.pythonanywhere.com/copch/'})

export const api = {
    getSmokedProducts: function () {
        return instance.get(``).then(res => res.data)
    },
}