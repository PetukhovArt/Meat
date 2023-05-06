import React, {useEffect, useState} from 'react';
import c from './SmokedMeat.module.css';
import axios from 'axios';

export type ProdType = {
    id: number
    name_prod: string
    unit: string
    price: string
}
export type ProdResponseType = ProdType[]

export const SmokedMeat = (props: any) => {

    const [item, setItem] = useState<ProdResponseType>([]);

    useEffect(() => {
        axios.get('http://bibak007.pythonanywhere.com/copch/')
            .then(res=> {
                setItem(res.data)
            })
    }, []);

    return <div className={c.smokedMeat}>
        <table className={c.smokedMeatTable}>
            <thead>
            <tr>
                <th>Позиция</th>
                <th>Наименование</th>
                <th>Единица товара</th>
                <th>Стоимость за ед.</th>
            </tr>
            </thead>
            <tbody>
            {item.map(el=> {
                return (
                    <tr>
                        <td><span>{el.id}</span></td>
                        <td><span>{el.name_prod}</span></td>
                        <td><span>{el.unit}</span></td>
                        <td><span>{el.price}</span></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
}
