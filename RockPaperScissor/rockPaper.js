// for (let i = 0; i < 5; i++) {}
// let user1 = prompt(
//   "Enter Your Choice(Rock , Papper , Scissor :) user 1 "
// ).toLowerCase();

// function getComputerChoice(num) {
//   const choices = ["rock", "papper", "scissor"];
//   return choices[num];
// }
// let num = Math.floor(Math.random() * 2) + 1;
// let user2 = getComputerChoice(num);

let answer1 = "";
let answer2 = "";
let humanScore = 0;
let computerScore = 0;

const label = document.querySelector("#result");
const btns = document.querySelectorAll("button");
const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");

btns.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (answer1 === "") {
      answer1 = "Answer 1 :" + buttons.textContent;
      ans1.textContent = answer1;
    } else if (answer2 === "") {
      answer2 = buttons.textContent;
      ans2.textContent = "Answer 2 :" + answer2;
    }
    playRound(answer1, answer2);
  });
});

function playRound(Answer1, Answer2) {
  if (
    (Answer1.includes("Rock") && Answer2?.includes("Scissor")) ||
    (Answer1.includes("Papper") && Answer2?.includes("Rock")) ||
    (Answer1.includes("Scissor") && Answer2?.includes("Papper"))
  ) {
    answer1 = "";
    answer2 = "";
    ++humanScore;
  } else if (
    (Answer1.includes("Scissor") && Answer2?.includes("Rock")) ||
    (Answer1.includes("Rock") && Answer2?.includes("Papper")) ||
    (Answer1.includes("Papper") && Answer2?.includes("Scissor"))
  ) {
    answer1 = "";
    answer2 = "";
    ++computerScore;
  }
  if (humanScore == 5) {
    label.textContent = "User 1 is the winner";
  } else if (computerScore == 5) {
    label.textContent = "User 2 is the winner";
  }
}
