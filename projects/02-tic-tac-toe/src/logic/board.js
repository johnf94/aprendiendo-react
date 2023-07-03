import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    //para ver si X o 0 ganó
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if( 
        boardToCheck[a] && // 0 -> x o 0
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //si no hay ganador 
    return null;
  }

  export const checkEndGame= (newBoard)=>{
    //revisamos si hay un empate
    //si no hay mas espacios vacios
    //en el tablero

    //newBoard = [x,0,x,0,x,0,x,0]
    return newBoard.every((square)=> square !== null) // x o 0
  }
