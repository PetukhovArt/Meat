import React from 'react';
import {
    getColdProductsAC,
    getCopchProductsAC,
    getPolyProductsAC,
    CommonProductType,
    ProductsPageType
} from '../../redux/productsReducer';
import {AppThunk} from '../../redux/store-redux';

//ACTION CREATORS

export function addToCartAC(product: CartProductType) {
    // id: number, name: string, price: string, quantity: number
    // return {type: 'ADD_TO_CART', id, name, price, quantity} as const
    return {type: 'ADD_TO_CART', ...product} as const
}

export function removeFromCartAC(id: number) {
    return {type: 'REMOVE_FROM_CART', id} as const
}

export function updateQuantityAC(id: number, quantity: number) {
    return {type: 'UPDATE_QUANTITY', id, quantity} as const
}

export type CartActionTypes =
    ReturnType<typeof addToCartAC>
    | ReturnType<typeof removeFromCartAC>
    | ReturnType<typeof updateQuantityAC>

//THUNK CREATORS =======================================================
export const addToCartThunk = (category: number, productId: number, quantity: number): AppThunk => async (dispatch, getState) => {

    const products: ProductsPageType = getState().productsPage
    const cartItems: CartProductType[] = getState().cart;
    const existingItem = cartItems.find(item => item.id === productId);


    if (existingItem) {
        //если такой итем уже есть в корзине, то добавляю количество
        dispatch(updateQuantityAC(existingItem.id, existingItem.quantity + quantity));
    } else {
        //если итема нет в корзине, то ищем по категории и  добавляю итем в список корзины
        const productsInCategory: CommonProductType[] = products[category];
        if (productsInCategory) {
            const product = productsInCategory.find((p) => p.id === productId);
            if (product) {
                //складываем параметры в объект
                const item = {
                    id: product.id,
                    product: product.name,
                    price: product.price,
                    quantity: quantity
                }
                dispatch(addToCartAC(item));
            }
        }
    }
};

export const removeFromCartThunk = (id: number): AppThunk => (dispatch) => {
    // определите функцию действия для удаления продукта из корзины
    dispatch(removeFromCartAC(id));
}

export const updateQuantityThunk = (id: number, quantity: number): AppThunk => (dispatch) => {
    // определите функцию действия для обновления количества продукта в корзине
    dispatch(updateQuantityAC(id, quantity));
}


//STATE =======================================================

export type CartProductType = {
    id: number
    product: string
    price: string
    quantity: number
}

const cartInitialState: CartProductType[] = [
    {
        id: 1,
        product: 'bebra',
        price: '300',
        quantity: 5
    }
]


//Reducer =======================================================
export function cartReducer(state: CartProductType[] = cartInitialState, action: CartActionTypes) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, {product: action, quantity: action.quantity}];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.id);
        case 'UPDATE_QUANTITY':
            return state.map(item => {
                if (item.id === action.id) {
                    return {...item, quantity: action.quantity};
                } else {
                    return item;
                }
            });
        default:
            return state;
    }
}






