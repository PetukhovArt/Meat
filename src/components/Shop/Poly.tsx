
import React, {useEffect} from 'react';
import c from './Copch.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {getCopchTC} from '../../redux/productsReducer';
import {RootState, useAppDispatch} from '../../redux/store-redux';
import {ProductItem} from './ProductItem/ProductItem';


export const Poly = () => {
    // const polyProduct = useSelector((state: RootState) => state.poly_Data)
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(getCopchTC())
    // }, []);

    return <div className={c.copch}>
        {/*{copchProduct.map((el, index) => {*/}
        {/*    return (*/}
        {/*        <div key={index + 1}>*/}
        {/*            <ProductItem*/}
        {/*                image={*/}
        {/*                    +el.copch_file.charAt(el.copch_file.length - 1) === 1 ?*/}
        {/*                        'https://m.dom-eda.com/uploads/images/catalog/item/f3f0e2744c/9fe501f69c_1000.jpg'*/}
        {/*                        : el.copch_file*/}
        {/*                }*/}
        {/*                height={'120px'} alt={'item'}*/}
        {/*                title={el.name_prod}*/}
        {/*                description={el.price + ' рублей/кг'}*/}
        {/*                // description={el.description ? el.description : ''}*/}

        {/*                // el.unit weight*/}
        {/*                // el.price*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*    )*/}
        {/*})}*/}
    </div>
}

