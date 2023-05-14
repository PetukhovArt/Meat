import { legacy_createStore as createStore} from 'redux'
import {AnyAction, applyMiddleware, combineReducers} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {CopchProductsActionTypes, smokedMeatReducer} from './smokedMeatReducer';
import {useDispatch} from 'react-redux';
import { reducer as formReducer } from 'redux-form'
import {AuthActionTypes, authReducer} from './authReducer';

//Type of new State (redux) , type of what rootReducer returns (it returns State)
export type StoreReduxType=typeof store

export const rootReducer = combineReducers({
    productPage: smokedMeatReducer,
    form: formReducer,
    auth: authReducer,

})


export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>  //стейт всего приложения
export type AppDispatch = ThunkDispatch<RootState, any, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>
// AppThunk: 1 - thunk returns void , full state APP , (extra args) , AnyAction
export const useAppDispatch=()=> useDispatch<AppDispatch>()
export type AppActionsType = CopchProductsActionTypes
    | AuthActionTypes

// @ts-ignore
window.store = store
