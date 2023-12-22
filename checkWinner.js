const checkWinner = (board) => {
  let size = board.length;
  // Check all rows
  for (let i = 0; i < size; i++) {
    let xCount = 0;
    let oCount = 0;
    for (let j = 0; j < size; j++) {
      if (board[j][i] === "") continue;
      else if (board[j][i] === "X") xCount++;
      else oCount++;
    }
    if (xCount === size) return "X";
    if (oCount === size) return "O";
  }
  //check all columns
  for (let i = 0; i < size; i++) {
    let xCount = 0;
    let oCount = 0;
    for (let j = 0; j < size; j++) {
      if (board[i][j] === "") continue;
      else if (board[i][j] === "X") xCount++;
      else oCount++;
    }
    if (xCount === size) return "X";
    if (oCount === size) return "O";
  }
  //Check all diagonals(2 diagonals for 3*3)
  //Diagonal 1
  let xDiag1Count = 0;
  let oDiag1Count = 0;
  for (let i = 0; i < size; i++) {
    if (board[i][i] === "") continue;
    else if (board[i][i] === "X") xDiag1Count++;
    else oDiag1Count++;
  }
  if (xDiag1Count === size) return "X";
  if (oDiag1Count === size) return "O";
  //Diagonal 2
  let xDiag2Count = 0;
  let oDiag2Count = 0;
  for (let i = 0; i < size; i++) {
    let j = size - i - 1;
    if (board[i][j] === "") continue;
    else if (board[i][j] === "X") xDiag2Count++;
    else oDiag2Count++;
  }
  if (xDiag2Count === size) return "X";
  if (oDiag2Count === size) return "O";
  //If nothing matches then game is not yet over
  return null;
};

export default checkWinner;
