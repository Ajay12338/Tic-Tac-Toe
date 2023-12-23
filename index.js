import checkWinner from "./checkWinner.js";
import clearBoard from "./clearBoard.js";
const containerDiv = document.querySelector("#container");
const nextText = document.querySelector("#next-player");
const playerOne = document.querySelector("#player1-score");
const playerTwo = document.querySelector("#player2-score");
let isFirstPlayer = true;
let selectedDiv = [];
let playerOneScore = 0;
let playerTwoScore = 0;

let actualTicTacBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const returnToStartState = () => {
  actualTicTacBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  selectedDiv = [];
  isFirstPlayer = true;
  nextText.innerText = "First Player:X";
};
containerDiv.addEventListener("click", (e) => {
  const currentElementId = e.target.id;
  if (
    !selectedDiv.includes(currentElementId) &&
    currentElementId !== "container"
  ) {
    if (isFirstPlayer) {
      document.getElementById(currentElementId).innerText = "X";
      nextText.innerText = "Next Player:O";
    } else {
      document.getElementById(currentElementId).innerText = "O";
      nextText.innerText = "Next Player:X";
    }
    let currCell = currentElementId[3];
    let rowNum = Math.floor(Number(currCell) / 3);
    let colNum = Number(currCell) % 3;
    actualTicTacBoard[rowNum][colNum] = isFirstPlayer ? "X" : "O";
    const thereIsAWinner = checkWinner(actualTicTacBoard);
    selectedDiv.push(currentElementId);
    isFirstPlayer = !isFirstPlayer;
    if (thereIsAWinner) {
      if (thereIsAWinner === "X") {
        playerOne.textContent = ++playerOneScore;
      } else {
        playerTwo.textContent = ++playerTwoScore;
      }
      alert(thereIsAWinner + " is the winner");
      clearBoard(selectedDiv);
      returnToStartState();
    }
    if (selectedDiv.length === 9) {
      alert("Game is a draw!!!");
      clearBoard(selectedDiv);
      returnToStartState();
    }
  }
});
containerDiv.addEventListener("mouseover", (e) => {
  const currentElementId = e.target.id;
  if (
    currentElementId !== "container" &&
    !selectedDiv.includes(currentElementId)
  ) {
    document.getElementById(e.target.id).textContent = isFirstPlayer
      ? "X"
      : "O";
  }
});
containerDiv.addEventListener("mouseout", (e) => {
  const currentElementId = e.target.id;
  if (
    currentElementId !== "container" &&
    !selectedDiv.includes(currentElementId)
  ) {
    document.getElementById(e.target.id).textContent = "";
  }
});
