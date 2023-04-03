import React, {useState} from 'react';
import s from './App.module.css';
import {Board} from './components/Board/Board';

function App() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const currentSquares = history[history.length - 1]
    function handlePlay() {
    }

    return (
        <div className={s.game}>
            <div className={s.gameBoard}>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className={s.gameInfo}>
                <ol></ol>
            </div>
        </div>

    );
}

export default App;
