import {useEffect} from 'react';
import {getCopchTC} from '../../redux/smokedMeatReducer';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store-redux';

export const Basket = () => {

    const copchProduct = useSelector((state: RootState) => state.productPage)
    const dispatch = useAppDispatch()


    useEffect(() => {

    }, []);

    return (
        <>BASKET</>
    );
};