import React, {useState} from 'react';
import Square from './Square';

function Board() {
    const [square, setSquare] = useState(Array(9).fill(null))

    const renderSquare = (i) => {
        return <Square value={square[i]} onClick={() => handleClick(i)} />
    }

    const handleClick = (i) => {
        console.log(i)
    }

    return (
        <div className='board'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            
        </div>
    )
}

export default Board