import {legacy_createStore as createStore} from 'redux'
import {AnyAction, applyMiddleware, combineReducers} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {productsReducer} from './productsReducer';
import {useDispatch} from 'react-redux';
import {reducer as formReducer} from 'redux-form'
import {AuthActionTypes, authReducer} from './authReducer';
import {ProductsActionTypes} from './productsReducer';
import {ActionsAppType, appReducer} from './appReducer';
import {OrdersActionTypes} from '../components/UserOrders/ordersReducer';
import {CartActionTypes, cartReducer} from '../components/Cart/cartReducer';

//Type of new State (redux) , type of what rootReducer returns (it returns State)
export type StoreReduxType = typeof store

export const rootReducer = combineReducers({
    form: formReducer,
    productsPage: productsReducer,
    auth: authReducer,
    app: appReducer,
    cart: cartReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>  //стейт всего приложения
export type AppDispatch = ThunkDispatch<RootState, any, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>
// AppThunk: 1 - thunk returns void , full state APP , (extra args) , AnyAction
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppActionsType = ProductsActionTypes
    | AuthActionTypes
    | ActionsAppType
    | OrdersActionTypes
    | CartActionTypes

// @ts-ignore
window.store = store
