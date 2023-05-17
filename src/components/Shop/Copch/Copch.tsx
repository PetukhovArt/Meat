import React, {useEffect} from 'react';
import c from './Copch.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getCopchTC} from '../../../redux/smokedMeatReducer';
import {RootState, useAppDispatch} from '../../../redux/store-redux';
import {ProductItem} from '../ProductItem/ProductItem';


export const Copch = () => {
    const copchProduct = useSelector((state: RootState) => state.productPage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCopchTC())
    }, []);

    return <div className={c.smokedMeat}>
        {copchProduct.map((el, index) => {
            return (
                <div key={index+1}>
                    <ProductItem image={el.copch_file}
                                 height={'120px'} alt={'item'}
                                 title={el.name_prod}
                                 // description={el.description ? el.description : ''}
                                 description={el.price + ' рублей/кг'}
                                 // el.unit weight
                                 // el.price
                    />
                </div>
            )
        })}
    </div>
}

