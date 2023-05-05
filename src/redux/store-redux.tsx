import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {productReducer} from './product-reducer';


export type AppRootStateType = ReturnType<typeof rootReducer>
//Type of new State (redux) , type of what rootReducer returns (it returns State)
export type StoreReduxType=typeof store

export const rootReducer = combineReducers({
    productPage: productReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>
// @ts-ignore
window.store = store
