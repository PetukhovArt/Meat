import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppThunk, RootState} from './store-redux';
import {RegistrFormDataType} from '../components/Forms/RegistrationReduxForm';
import {LoginFormDataType} from '../components/Forms/LoginReduxForm';

//ACTION CREATORS
export const setAuthUserData = (data: AuthData) => {
    return {type: 'SET-USER-DATA', data} as const
}
export const isAuth = (data: any) => {
    return {type: 'SET-IS-AUTH', data} as const
}
export const deleteToken = () => {
    return {type: 'DELETE-TOKEN'} as const
}


export type AuthActionTypes =
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof isAuth>

//THUNK CREATORS =======================================================

export const registrationTC = ({...formData}: RegistrFormDataType): AppThunk => async dispatch => { //async function Thunk
    try {
        const data = await authAPI.registration({...formData}) //wait for response
        // dispatch(getCopchProducts(data)) //then dispatch AC to setState
    } catch (e) {
        throw new Error('fail')
    }
}
export const loginTC = (email: string, password: string): AppThunk => async dispatch => {
    try {
        const data = await authAPI.login(email, password)
        if (data.data.startsWith('Logged in')) {
            console.log('Строка начинается с \'Logged in\'');
            dispatch(isAuth(true))
        } else {
            console.log('Строка НЕ начинается с \'Logged in\'');
        }
        // dispatch(getCopchProducts(data))
    } catch (e) {
        throw new Error('fail')
    }
}
export const logoutTC = (): AppThunk => async dispatch => { //async function Thunk
    dispatch(deleteToken)
}

//STATE =======================================================
let initialState: AuthData = {
    id: null,
    email: null,
    isAuth: false,
}
export type initialStateUserDataType = typeof initialState

//Reducer =======================================================

export const authReducer = (state: initialStateUserDataType = initialState, action: AuthActionTypes)
    : initialStateUserDataType => {

    switch (action.type) {
        // case 'SET-USER-DATA':
        //     return {...state, ...action.data, isAuth: true}
        case 'SET-IS-AUTH':
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

//TYPES
export type AuthData = {
    id: number | null
    email: string | null
    isAuth: boolean
}




