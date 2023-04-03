import React, {useState} from 'react';
import s from './Board.module.css';
import {Square} from '../Square/Square';

type BoardPropsType = {
    xIsNext: boolean,
    squares: string[]
    onPlay: () => void
}

export function Board(props: BoardPropsType ) {
    const [xNext, setXNext] = useState(true)
    const [squares, setSquares] = useState<string[]>(Array(9).fill(null))

    function calculateWinner(squares: string[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(squares)
    const onSquareClickHandler = (idx: number) => {
        if (squares[idx] || winner) return;
        setSquares([...squares]
            .map((s, i) => s ? s : i == idx && xNext ? 'X' : i == idx && !xNext ? 'O' : s))
        setXNext(!xNext)
    }
    const onClickReset = () => {
        setSquares(Array(9).fill(null))
    }
    let text = 'is the Winner, congratulations!!!'

    return (
        <div className={s.boardWrapper}>
            <div className={!winner ? s.status : `${s.status} ${s.statusWin}`}>
                {winner && xNext ? `O ${text}` : winner && !xNext ? `X ${text}`
                    : xNext ? 'Next player X !' : 'Next player O !'}
            </div>
            <div className={s.board}>
                <div className={s.boardRow}>
                    <Square value={squares[0]} onClick={() => onSquareClickHandler(0)}/>
                    <Square value={squares[1]} onClick={() => onSquareClickHandler(1)}/>
                    <Square value={squares[2]} onClick={() => onSquareClickHandler(2)}/>
                </div>
                <div className={s.boardRow}>
                    <Square value={squares[3]} onClick={() => onSquareClickHandler(3)}/>
                    <Square value={squares[4]} onClick={() => onSquareClickHandler(4)}/>
                    <Square value={squares[5]} onClick={() => onSquareClickHandler(5)}/>
                </div>
                <div className={s.boardRow}>
                    <Square value={squares[6]} onClick={() => onSquareClickHandler(6)}/>
                    <Square value={squares[7]} onClick={() => onSquareClickHandler(7)}/>
                    <Square value={squares[8]} onClick={() => onSquareClickHandler(8)}/>
                </div>
            </div>
            <button onClick={onClickReset} className={s.button}>Reset</button>
            {winner? <div>Press 'Reset' button and start New Game!</div> : ''}
        </div>
    );
}

