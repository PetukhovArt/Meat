import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppThunk, RootState} from './store-redux';
import {RegistrFormDataType} from '../components/Forms/RegistrationReduxForm';
import {LoginFormDataType} from '../components/Forms/LoginReduxForm';

//ACTION CREATORS
export const setLoadingStatusAC=(status: RequestStatusType)=> {
    console.log(status)
    return {type: 'SET-LOADING', status} as const
}

//THUNK CREATORS =======================================================


//STATE =======================================================
const initialState = {
    status: 'loading' as RequestStatusType
}
//Reducer =======================================================
export const appReducer = (state: InitialStateType = initialState, action: ActionsAppType): InitialStateType => {
    switch (action.type) {
        case 'SET-LOADING':
            return {...state, status: action.status}
        default:
            return state
    }
}


//TYPES
export type ActionsAppType = ReturnType<typeof setLoadingStatusAC>
type InitialStateType = typeof initialState
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'




