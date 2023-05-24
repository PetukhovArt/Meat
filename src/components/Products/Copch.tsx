import React, {useEffect} from 'react';
import c from './Product.module.css';
import {getCopchTC, CommonProductType} from '../../redux/productsReducer';
import {useAppDispatch} from '../../redux/store-redux';
import {ProductItem} from './ProductItem/ProductItem';
import {Backdrop, CircularProgress, LinearProgress} from '@mui/material';
import {RequestStatusType} from '../../redux/appReducer';

type CopchPageType = {
    products: CommonProductType[]
}

export const Copch = (props: CopchPageType) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCopchTC())
    }, []);

    return <div className={c.copch}>
        {props.products.map((el, index) => {
                    return (
                        <div key={el.id}>
                            <ProductItem
                                category={el.category}
                                productId={el.id}
                                image={
                                    el.img === null ?
                                        'https://m.dom-eda.com/uploads/images/catalog/item/f3f0e2744c/9fe501f69c_1000.jpg'
                                        : el.img}
                                height={'130px'} alt={'item'}
                                title={el.name}
                                description={el.price + ' рублей/кг'}
                            />
                        </div>
                    )
                })
        }
    </div>
}

