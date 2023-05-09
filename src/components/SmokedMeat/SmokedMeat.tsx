import React, {useEffect} from 'react';
import c from './SmokedMeat.module.css';
import sheika from '../../assets/images/copch-products/sheika-vareno-kopchenaya.png';
import {useDispatch, useSelector} from 'react-redux';
import {getCopchTC} from '../../redux/smokedMeatReducer';
import {AppDispatchType, RootStateType, useAppDispatch} from '../../redux/store-redux';


export const SmokedMeat = (props: any) => {
    const copchProduct = useSelector((state: RootStateType) => state.productPage)
    const dispatch=useAppDispatch()

    useEffect(() => {
        dispatch(getCopchTC())
    }, []);

    return <div className={c.smokedMeat}>
        <table className={c.smokedMeatTable}>
            <thead>
            <tr>
                <th>Позиция</th>
                <th>Наименование</th>
                <th>Единица товара</th>
                <th>Стоимость за ед.</th>
                <th>Вид товара</th>
            </tr>
            </thead>
            <tbody>
            {copchProduct.map((el, index) => {
                return (
                    <tr key={index+1}>
                        <td><span>{(index+1)}</span></td>
                        <td><span>{el.name_prod}</span></td>
                        <td><span>{el.unit}</span></td>
                        <td><span>{el.price}</span></td>
                        <td><img className={c.copchImage}
                                 src={`${el.copch_file}`}
                                 alt='copchProductImage'/></td>
                    </tr>
                )
            })}
            </tbody>
        </table>

    </div>
}
