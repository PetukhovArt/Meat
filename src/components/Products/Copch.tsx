import React, {useEffect} from 'react';
import c from './Product.module.css';
import {getCopchTC, ProductCommon} from '../../redux/productsReducer';
import {useAppDispatch} from '../../redux/store-redux';
import {ProductItem} from './ProductItem/ProductItem';
import {Backdrop, CircularProgress, LinearProgress} from '@mui/material';
import {RequestStatusType} from '../../redux/appReducer';

type CopchPageType = {
    products: ProductCommon[]
    loadStatus: RequestStatusType
}

export const Copch = (props: CopchPageType) => {
    const dispatch = useAppDispatch()



    useEffect(() => {
        dispatch(getCopchTC())
    }, []);

    return <div className={c.copch}>
        {props.loadStatus==='loading'?
            <div className={c.waiting}>
                    <LinearProgress value={20}
                                    sx={{
                                        height: 10,
                                        width: '50vh',
                                        borderRadius: 5,
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        '& .MuiLinearProgress-bar': {
                                            borderRadius: 5,
                                            backgroundColor: '#1a90ff',
                                        },
                                    }}
                    />
            </div>
            :
            props.products.map((el, index) => {
                    return (
                        <div key={index + 1}>
                            <ProductItem
                                image={
                                    el.img === null ?
                                        'https://m.dom-eda.com/uploads/images/catalog/item/f3f0e2744c/9fe501f69c_1000.jpg'
                                        : el.img}
                                height={'120px'} alt={'item'}
                                title={el.name}
                                description={el.price + ' рублей/кг'}
                            />
                        </div>
                    )
                })
        }
    </div>
}

