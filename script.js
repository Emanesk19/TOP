// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.textContent = "Hey I'am red";
redText.style.color = "Red"

const blueText = document.createElement("h3");
blueText.textContent = "Hey I'm blue text";
blueText.style.color = "Blue"

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style" , "border: 1px solid black ; background:pink ;")

const h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I’m in a div";

const pInDiv = document.createElement("p");
pInDiv.textContent = "Me too";


container.appendChild(content);
content.appendChild(redText);
content.appendChild(blueText);
pinkDiv.appendChild(h1InDiv);
pinkDiv.appendChild(pInDiv);
content.appendChild(pinkDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click",function(e){
    e.target.style.background = "blue"
    console.log();
    
})




