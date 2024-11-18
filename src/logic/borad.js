import { COMBOS_WINNER } from "../constants";

export const checkWinner = (boardToCheck) => {
  // revisar todas las combinaciones ganadoras per ver si ganó x y o. 
  for (const combo of COMBOS_WINNER) {
    const [a, b, c] = combo;
    if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
      return boardToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // para verificar un empate, ver si todos los square hay contenido/son diferentes a null
  return newBoard.every(square => square !== null);
}