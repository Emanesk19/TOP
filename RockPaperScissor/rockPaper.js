let humanScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
  let user1 = prompt(
    "Enter Your Choice(Rock , Papper , Scissor :) user 1 "
  ).toLowerCase();

  function getComputerChoice(num) {
    const choices = ["rock", "papper", "scissor"];
    return choices[num];
  }
  let num = Math.floor(Math.random() * 2) + 1;
  let user2 = getComputerChoice(num);
  playRound(user1, user2);
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice.includes("rock") && computerChoice?.includes("scissor")) ||
    (humanChoice.includes("papper") && computerChoice?.includes("rock")) ||
    (humanChoice.includes("scissor") && computerChoice?.includes("papper"))
  ) {
    console.log("humanChoice is the winner");
    humanScore++;
  } else if (
    (humanChoice.includes("scissor") && computerChoice?.includes("rock")) ||
    (humanChoice.includes("rock") && computerChoice?.includes("papper")) ||
    (humanChoice.includes("papper") && computerChoice?.includes("scissor"))
  ) {
    console.log("computerChoice is the winner");
    computerScore++;
  } else {
    console.log("No Winner");
  }
}

if (humanScore > computerScore) {
  console.log("Human Won");
} else if (humanScore < computerScore) {
  console.log("Computer Won");
} else {
  console.log("Tie");
}
