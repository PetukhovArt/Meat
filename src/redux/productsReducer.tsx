import {Dispatch} from 'redux';
import {productsAPI} from '../api/api';
import {AppThunk, RootState} from './store-redux';
import {setLoadingStatusAC} from './appReducer';

//ACTION CREATORS
export const getCopchProductsAC = (copchItems: copchType[]) => {
    return {type: 'GET-COPCH', copchItems} as const
}
export const getPolyProductsAC = (polyItems: polyType[]) => {
    return {type: 'GET-POLY', polyItems} as const
}
export const getColdProductsAC = (coldItems: coldType[]) => {
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
        console.log(data)
        dispatch(getCopchProductsAC(data)) //then dispatch AC to setState
        dispatch(setLoadingStatusAC('idle'))
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

type ProductCommon = {
    id: number
    name_prod: string
    unit: string
    price: string
    // description?: string
}

export type copchType = ProductCommon & {
    img: string | null
    // дополнительные свойства для товара 1
};

export type polyType = ProductCommon & {
    img: string | null
    // дополнительные свойства для товара 2
};

export type coldType = ProductCommon & {
    img: string | null
    // дополнительные свойства для товара 3
};
export type ProductsPageType = {
    copch: copchType[]
    poly: polyType[]
    cold: coldType[]
}

// let initialState: Array<CopchProductType> = []
let initialState: ProductsPageType = {
    copch: [],
    poly: [],
    cold: []
};

//Reducer =======================================================

export const productsReducer = (state: ProductsPageType = initialState, action: ProductsActionTypes)
    : ProductsPageType => {

    switch (action.type) {
        case 'GET-COPCH':
            return {...state, copch: action.copchItems.map(el => ({...el}))}
        case 'GET-POLY':
            return {...state, poly: action.polyItems.map(el => ({...el}))}
        case 'GET-COLD':
            return {...state, cold: action.coldItems.map(el => ({...el}))}
        default:
            return state;
    }
}



