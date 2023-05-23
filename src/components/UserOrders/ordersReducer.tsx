import {Dispatch} from 'redux';
import {productsAPI} from '../../api/api';
import {AppThunk, RootState} from '../../redux/store-redux';
import {setLoadingStatusAC} from '../../redux/appReducer';

//ACTION CREATORS
export const setUserOrdersAC = (orders:OrderType[]) => {
    return {type: 'SET-USER-ORDERS', orders} as const
}

export type OrdersActionTypes = ReturnType<typeof setUserOrdersAC>


//THUNK CREATORS =======================================================

export const getUserOrdersTC = (): AppThunk => async dispatch => { //async function Thunk
    dispatch(setLoadingStatusAC('loading'))
    try {
        const data = await productsAPI.getOrders() //wait for response
        dispatch(setUserOrdersAC(data)) //then dispatch AC to setState
        dispatch(setLoadingStatusAC('succeeded'))
    } catch (e) {
        throw new Error('fail')
    }
}

//STATE =======================================================

export type OrderType = {
    user: string
    order_id: number
    product: string
    price: string
    quantity: number
}

// let initialState: Array<CopchProductType> = []
let initialState: OrderType[] = [
    // {
        //     "user": "set_mm@mail.ru",
        //     "order_id": 2,
        //     "product": "Колбаса копченая свинина-говядина (в палке 0.5кг)",
        //     "price": "100.00",
        //     "quantity": 1
    // }
]


//Reducer =======================================================

export const productsReducer = (state: OrderType[] = initialState, action: OrdersActionTypes)
    : OrderType[] => {

    switch (action.type) {
        case 'SET-USER-ORDERS':
            return {...state}
        default:
            return state;
    }
}



