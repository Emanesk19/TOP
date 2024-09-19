
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(double);
console.log(backtick);
 
let message  = "Me"

function add7(n){
    return n + 7
}
console.log( add7(1));

function multiiply(num1 , num2){
    return num1 * num2
}
console.log(multiiply(1 ,5));

function toUpper(text){
    let toLowwer = text.toLowerCase().charAt(0).toUpperCase();
    return  toLowwer + text.slice(1).toLowerCase()
}
console.log(toUpper("SHE"));

function lastLetter(){
   let count  =  message.length
   return count
}
lastLetter()
let n = Math.floor(Math.random() * 3) + 1;
function getComputerChoice(num){
    const choices = ["rock" , "papper" , "scissor"]
    return choices[num]
}
let num = Math.floor(Math.random() * 3) + 1;
let user2 = getComputerChoice(num)
console.log(user2);
