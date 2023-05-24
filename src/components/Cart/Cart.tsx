import {useEffect, useState} from 'react';
import * as React from 'react';
import c from './Cart.module.css';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store-redux';
import Alert from '@mui/material/Alert';
import {SuperButton} from '../Button/SuperButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CartProductType, removeFromCartThunk} from './cartReducer';

export const Cart = () => {

    const cartItems = useSelector<RootState, CartProductType[]>(state => state.cart)
    const dispatch = useAppDispatch()
    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCartThunk(id));
    };

    return (
        <div>
            <h2>Корзина</h2>
            {cartItems.length > 0 ?
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <p>{item.product}</p>
                            <p>Количество: {item.quantity}</p>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
                :
                <p>Корзина пуста</p>
            }
            <button>Оформить заказ</button>
        </div>
    );
}


//     return (
//         <div className={c.basket}>
//             <Alert severity="info">В корзине пока нет товаров!</Alert>
//             <SuperButton name={'Вернуться'} route={'/copch'}/>
//             <div>
//
//             </div>
//         </div>
//     );
// };
//
// function createData(
//     name: string,
//     count: number,
//     weight: number,
//     price: number,
//     cost: number,
// ) {
//     return { name, count, weight, price, cost };
// }
//
// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// <div>
//     <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead sx={{backgroundColor: 'rgb(229, 246, 253)'}}>
//                 <TableRow>
//                     <TableCell>Продукт</TableCell>
//                     <TableCell align="center">Количество</TableCell>
//                     <TableCell align="center">Общий вес&nbsp;(кг)</TableCell>
//                     <TableCell align="center">Цена&nbsp;(кг)</TableCell>
//                     <TableCell align="center">Стоимость</TableCell>
//                     <TableCell align="center">Выбрать</TableCell>
//                 </TableRow>
//             </TableHead>
//
//             <TableBody>
//                 {rows.map((row) => (
//                     <TableRow
//                         key={row.name}
//                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                     >
//                         <TableCell component="th" scope="row">
//                             {row.name}
//                         </TableCell>
//                         <TableCell align="center">{row.count}</TableCell>
//                         <TableCell align="center">{row.weight}</TableCell>
//                         <TableCell align="center">{row.price}</TableCell>
//                         <TableCell align="center">{row.cost}</TableCell>
//                         <TableCell align="center">{'icon'}</TableCell>
//                     </TableRow>
//                 ))}
//             </TableBody>
//         </Table>
//     </TableContainer>
// </div>