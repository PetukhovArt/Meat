import React, {useState} from 'react';
import s from './/Square.module.css'

type SquarePropsType = {
    value: string
    onClick: ()=> void
}

export function Square(props: SquarePropsType) {

    return (
        <button className={s.square}
                onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

