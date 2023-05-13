import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppThunk, RootState} from './store-redux';
import {RegistrFormDataType} from '../components/RegistrationForm/RegistrationReduxForm';
import {LoginFormDataType} from '../components/LoginForm/LoginReduxForm';

//ACTION CREATORS
export const getCopchProducts = (products: Array<CopchProductType>) => {
    return {type: 'GET-COPCH', products} as const
}

export type CopchProductsActionTypes = ReturnType<typeof getCopchProducts>

//THUNK CREATORS =======================================================

export const registrationTC = ({...formData}:RegistrFormDataType): AppThunk => async dispatch => { //async function Thunk
    try {
        const data = await authAPI.reg({...formData}) //wait for response
        // dispatch(getCopchProducts(data)) //then dispatch AC to setState
    } catch (e) {
        throw new Error('fail')
    }
}
export const loginTC = (email: string, password: string): AppThunk => async dispatch => {
    try {
        const data = await authAPI.login(email, password)
        // dispatch(getCopchProducts(data))
    } catch (e) {
        throw new Error('fail')
    }
}
export const logoutTC = (): AppThunk => async dispatch => { //async function Thunk
    try {
        const data = await authAPI.logout() //wait for response
        // dispatch(getCopchProducts(data)) //then dispatch AC to setState
    } catch (e) {
        throw new Error('fail')
    }
}

//STATE =======================================================
export type CopchProductType = {
    id: number
    name_prod: string
    unit: string
    price: string
    copch_file: string
}

let initialState: Array<CopchProductType> = []

//Reducer =======================================================

export const smokedMeatReducer = (state: Array<CopchProductType> = initialState, action: CopchProductsActionTypes)
    : Array<CopchProductType> => {

    switch (action.type) {
        case 'GET-COPCH':
            return action.products.map(el => ({...el}))
        default:
            return state;
    }
}



