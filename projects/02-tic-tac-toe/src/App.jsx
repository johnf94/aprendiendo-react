import { useState } from 'react'
import confetti from  'canvas-confetti'

import './App.css'
import { Square }  from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'


function App() {
  const [board, setBoard] = useState( Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) 
  // null no hay ganador, false empate

  

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  
  const updateBoard = (index)=>{
    //no actualizamos esta posicion si ya tiene algo
    if(board[index] || winner)return
    //actualizamos el tablero
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)      
    }// ToDo: check si el juego ya terminó
     else if(checkEndGame(newBoard)){
      setWinner(false)//empate
    }

  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar el Juego</button>
      <section className='game'>
      { 
        board.map((_, index) => {
          return(
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
          )
        })
      }
      </section>
      <section className='turn'>
        <Square isSelected = {turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected = {turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
