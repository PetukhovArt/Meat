import {Dispatch} from 'redux';
import {productsAPI} from '../api/api';
import {AppThunk, RootState} from './store-redux';
import {setLoadingStatusAC} from './appReducer';

//ACTION CREATORS
export const getCopchProductsAC = (copchItems: CommonProductType[]) => {
    return {type: 'GET-COPCH', copchItems} as const
}
export const getPolyProductsAC = (polyItems: CommonProductType[]) => {
    return {type: 'GET-POLY', polyItems} as const
}
export const getColdProductsAC = (coldItems: CommonProductType[]) => {
    return {type: 'GET-COLD', coldItems} as const
}

export type ProductsActionTypes =
    ReturnType<typeof getCopchProductsAC>
    | ReturnType<typeof getPolyProductsAC>
    | ReturnType<typeof getColdProductsAC>

//THUNK CREATORS =======================================================

export const getCopchTC = (): AppThunk => async dispatch => { //async function Thunk
    dispatch(setLoadingStatusAC('loading'))
    try {
        const data = await productsAPI.getCopch() //wait for response
        dispatch(getCopchProductsAC(data)) //then dispatch AC to setState
        dispatch(setLoadingStatusAC('succeeded'))
    } catch (e) {
        throw new Error('fail')
    }
}
export const getPolyTC = (): AppThunk => async dispatch => { //async function Thunk
    try {
        const data = await productsAPI.getPoly() //wait for response
        dispatch(getPolyProductsAC(data)) //then dispatch AC to setState
    } catch (e) {
        throw new Error('fail')
    }
}
export const getColdTC = (): AppThunk => async dispatch => { //async function Thunk
    try {
        const data = await productsAPI.getCold() //wait for response
        dispatch(getColdProductsAC(data)) //then dispatch AC to setState
    } catch (e) {
        throw new Error('fail')
    }
}

//STATE =======================================================

export type CommonProductType = {
    id: number
    name: string
    description: string
    unit: string
    price: string
    img: string | null
    available: boolean
    category: number
}

export type ProductsPageType = {
    [key: string]: CommonProductType[]
}

let initialState: ProductsPageType = {
    [1]: [],
    [2]: [],
    [3]: []
};

//Reducer =======================================================

export const productsReducer = (state: ProductsPageType = initialState, action: ProductsActionTypes)
    : ProductsPageType => {

    switch (action.type) {
        case 'GET-COPCH':
            return {...state, [1]: action.copchItems.map(el => ({...el}))}
        case 'GET-POLY':
            return {...state, [2]: action.polyItems.map(el => ({...el}))}
        case 'GET-COLD':
            return {...state, [3]: action.coldItems.map(el => ({...el}))}
        default:
            return state;
    }
}



