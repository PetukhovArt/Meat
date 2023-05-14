import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppThunk, RootState} from './store-redux';
import {RegistrFormDataType} from '../components/Forms/RegistrationReduxForm';
import {LoginFormDataType} from '../components/Forms/LoginReduxForm';

//ACTION CREATORS
export const setAuthUserData = (data: AuthData) => {
    return {type: 'SET-USER-DATA', data} as const
}

export type AuthActionTypes = ReturnType<typeof setAuthUserData>

//THUNK CREATORS =======================================================

export const getAuthTC = (): AppThunk => async dispatch => {
    try {
        const data = await authAPI.me()
        if (data) {
            dispatch(setAuthUserData(data))
        }
    } catch (e) {
        throw new Error('fail in getting authMe')
    }
}

export const registrationTC = ({...formData}: RegistrFormDataType): AppThunk => async dispatch => { //async function Thunk
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
        case 'SET-USER-DATA':
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




