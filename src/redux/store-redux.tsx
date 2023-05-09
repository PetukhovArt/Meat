import { legacy_createStore as createStore} from 'redux'
import {AnyAction, applyMiddleware, combineReducers} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {smokedMeatReducer} from './smokedMeatReducer';
import {useDispatch} from 'react-redux';

export type AppRootStateType = ReturnType<typeof rootReducer>
//Type of new State (redux) , type of what rootReducer returns (it returns State)
export type StoreReduxType=typeof store

export const rootReducer = combineReducers({
    productPage: smokedMeatReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch=()=> useDispatch<AppDispatchType>()

// @ts-ignore
window.store = store
