const btn = document.querySelector("#btn");
const cellItems = document.querySelectorAll(".grid-iems");
const playerName = document.querySelector("#playername");
const playerOneScore = document.querySelector(".player1");
const playerTwoScore = document.querySelector(".player2");
const GameOver = document.querySelector(".GameOver");
const overlay = document.querySelector(".overlay");
const showWinner = document.querySelector(".showWinner")
const gameBoard = {
  board: ["", "", "", "", "", "", "", "", ""],
};

cellItems.forEach((item, index) => {
  item.textContent = gameBoard.board[index];
});


const player1 = {
  name: "Player1",
  symbol: "X",
  score: 0,
};

const player2 = {
  name: "Bot",
  symbol: "O",
  score: 0,
};

playerOneScore.textContent = `${player1.name}: ${player1.score}`;
playerTwoScore.textContent = `Bot: ${player2.score}`;
const gameController = {
  currentPlayer: player1,
  startGame: function () {
    gameBoard.board = ["", "", "", "", "", "", "", "", ""];
    cellItems.forEach((items, index) => {
      items.textContent = gameBoard.board[index];
    });
    this.currentPlayer = player1;
  },
  playTurn: function (index) {
    console.log(index);

    if (gameBoard.board[index].includes("")) {
      console.log(this.currentPlayer);

      gameBoard.board[index] =
        this.currentPlayer == player1 ? player1.symbol : player2.symbol;
      this.currentPlayer = this.currentPlayer == player1 ? player2 : player1;
    }
  },
  checkWinner: function () {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        gameBoard.board[a] &&
        gameBoard.board[a] === gameBoard.board[b] &&
        gameBoard.board[b] === gameBoard.board[c]
      ) {
        if (gameBoard.board[a] === "X") {
          player1.score++;
          console.log("Score", player1.score);

          return player1.name;
        } else {
          player2.score++;
          return player2.name;
        }
      }
    }
    return gameBoard.board.includes("") ? null : "draw";
  },

  checkGameStatus: function () {
    const winner = gameController.checkWinner();
    if (winner) {
      if (winner === "draw") {
        alert("It's a draw!");
      } else {
        playerOneScore.textContent = `${player1.name}:${player1.score}`;
        playerTwoScore.textContent = `Bot: ${player2.score}`;
      }
      if (player1.score === 3) {
        GameOver.textContent = "Game Over";
        btn.textContent = "Restart";
        showWinner.textContent = `${player1.name} Wins!!`
      }else if (player2.score === 3) {
        GameOver.textContent = "Game Over";
        btn.textContent = "Restart";
        showWinner.textContent = `${player2.name} Wins!!`
      }

      this.startGame();
    }
  },

  getComputerChoice: function () {
    const emptyCells = gameBoard.board
      .map((cell, index) => {
        return cell === "" ? index : null;
      })
      .filter((val) => {
        return val !== null;
      });
    console.log(emptyCells);

    if (emptyCells.length > 0) {
      const emptyIndex =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      this.playTurn(emptyIndex);
      cellItems[emptyIndex].textContent = gameBoard.board[emptyIndex];
      this.checkGameStatus();
    }
  },
};

playerName.addEventListener("change", (e) => {
  player1.name = playerName.value;
  playerOneScore.textContent = `${player1.name}:${player1.score}`;
  playerTwoScore.textContent = `Bot: ${player2.score}`;
});

btn.addEventListener("click", () => {
  let index = 0;
  cellItems.forEach((items) => {
    items.textContent = gameBoard.board[index];
    gameController.startGame();
    index++;
  });
});

cellItems.forEach((items, index) => {
  items.addEventListener("click", () => {
    gameController.playTurn(index);
    items.textContent = gameBoard.board[index];
    gameController.getComputerChoice();
  });
});
