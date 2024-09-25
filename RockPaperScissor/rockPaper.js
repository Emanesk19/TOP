let answer1 = "";
let answer2 = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(num) {
  const choices = ["Rock", "Papper", "Scissor"];
  return choices[num];
}
let num = 0;

const label = document.querySelector("#result");
const btns = document.querySelectorAll("button");
const ans1 = document.querySelector("#ans1");
const loser = document.createElement("p");

btns.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (answer1 === "") {
      answer1 = buttons.textContent;
    }
    for (let i = 0; i < 5; i++) {
      num = Math.floor(Math.random() * 2) + 1;
    }
    let ans2 = getComputerChoice(num);
    console.log(ans2);

    playRound(answer1, ans2);
  });
});

function playRound(Answer1, Answer2) {
  if (
    (Answer1.includes("Rock") && Answer2?.includes("Scissor")) ||
    (Answer1.includes("Papper") && Answer2?.includes("Rock")) ||
    (Answer1.includes("Scissor") && Answer2?.includes("Papper"))
  ) {
    answer1 = "";
    ++humanScore;
    console.log("human score", humanScore);
  } else if (
    (Answer1.includes("Scissor") && Answer2?.includes("Rock")) ||
    (Answer1.includes("Rock") && Answer2?.includes("Papper")) ||
    (Answer1.includes("Papper") && Answer2?.includes("Scissor"))
  ) {
    console.log(Answer2);
    answer1 = "";
    ++computerScore;
    console.log("Computer Score", computerScore);
  }
  if (humanScore == 5) {
    label.textContent = `User is the winner. Score ${humanScore}`;
    loser.textContent = `Computer Score : ${computerScore}`;
  } else if (computerScore == 5) {
    label.textContent = `Computer is the winner. Score ${computerScore}`;
    loser.textContent = `Human  Score : ${humanScore}`;
  }
}

label.appendChild(loser);

