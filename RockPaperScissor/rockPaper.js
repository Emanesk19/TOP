let answer1 = "";
let answer2 = "";

const label = document.querySelector("#result");
const btns = document.querySelectorAll("button");

btns.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (answer1 === "") {
      answer1 = buttons.textContent;
      console.log("answer 1", answer1);
    } else {
      answer2 = buttons.textContent;
      console.log("answer 1", answer2);
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
    label.textContent = "User 1 is the winner";
  } else if (
    (Answer1.includes("Scissor") && Answer2?.includes("Rock")) ||
    (Answer1.includes("Rock") && Answer2?.includes("Papper")) ||
    (Answer1.includes("Papper") && Answer2?.includes("Scissor"))
  ) {
    label.textContent = "User 2 is the winner";
  } else {
    console.log("No Winner");
  }
}


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

