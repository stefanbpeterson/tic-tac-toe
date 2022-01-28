import React, {useState} from 'react';
import Square from './Square';

function Board() {
    const [square, setSquare] = useState(Array(9).fill(null))
    const [X, setX] = useState(true)
    
    const renderSquare = (i) => {
        return <Square value={square[i]} onClick={() => handleClick(i)} />
    }

    const handleClick = (i) => {
        const squares = square.slice()

        if(squares[i] === null) {
            squares[i] = X ? '🤪' : '😂'
            setSquare(squares)
            setX(!X)
        } else {
            alert(`Can't do that`)
        }
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i = 0; i < lines.length; i++) {
            const [a,b,c] = lines[i]

            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }

        return null
    }

    const winner = calculateWinner(square)
    let status
    if(winner) {
        status = `${winner} WINS!`
    } else {
        status = 'Player turn: ' + (X ? '🤪' : '😂')
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
            <div style={{fontSize: 100, marginTop: 50}}>
                {status}
            </div>
        </div>
    )
}

export default Board
