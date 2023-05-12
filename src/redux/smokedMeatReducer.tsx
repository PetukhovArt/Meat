import {Dispatch} from 'redux';
import {api} from '../api/api';
import {AppThunk, RootState} from './store-redux';

//ACTION CREATORS
export const getCopchProducts = (products: Array<CopchProductType>) => {
    return {type: 'GET-COPCH', products} as const
}

export type CopchProductsActionTypes = ReturnType<typeof getCopchProducts>

//THUNK CREATORS =======================================================

export const getCopchTC = (): AppThunk => async dispatch => { //async function Thunk
    try {
        const data = await api.getSmokedProducts() //wait for response
        dispatch(getCopchProducts(data)) //then dispatch AC to setState
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



