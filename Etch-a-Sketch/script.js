const btn = document.querySelector("#numofSquare");
const container = document.querySelector("#container");

let numOfSquares = 0;

btn.addEventListener("click", () => {
   numOfSquares = prompt("Enter the number of squares you want to create");
  if(numOfSquares <= 100){
    container.innerHTML = ""
    createSquares(numOfSquares);
  }else{
    alert("Nnumber of square must be lessthan or equal to 100")
  }
});


function createSquares(widthSize) {    
  for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("divs");
    if (numOfSquares == 0) {
      div.style.width = `calc(100%/${widthSize})`;
      div.style.height = `calc(100%/${widthSize})`;
    } else {
      div.style.width = `${widthSize}px`;
      div.style.height = `${widthSize}px`;
    }

    const inDiv = document.createElement("p");

    div.appendChild(inDiv);
    container.appendChild(div);

    div.addEventListener("mouseenter", () => {
      div.style.background = "Black";
    });
    div.addEventListener("mouseleave", () => {
      div.style.background = "rgb(141, 197, 197)";
    });
  }
}

if(numOfSquares == 0){
    createSquares(16)
}

