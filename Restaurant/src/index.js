import "./style.css";
import { welcomeText, p, btnDiv } from "./content";
import { MenuPage } from "./menu";
import { aboutPage } from "./about";
const content = document.querySelector("#content");
const nav = document.querySelector("nav");
const btns = nav.querySelectorAll("button");
const body = document.body;

content.appendChild(welcomeText);
content.appendChild(p);
content.appendChild(btnDiv);
btns.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (buttons.textContent.includes("Menu")) {
        const {header , coloredText , gridContainer} = MenuPage();
        content.innerHTML = " ";
        content.style.marginTop = '-15px';
        content.style.height = '84vh';
        content.style.background = 'white';
        content.appendChild(header);
        content.appendChild(coloredText);
        content.appendChild(gridContainer);
    } else if (buttons.textContent.includes("Home")) {
      content.innerHTML = "";
      content.style.background = 'transparent';
      content.style.marginTop = '100px';
      content.style.height = '70vh';
      content.appendChild(welcomeText);
      content.appendChild(p);
      content.appendChild(btnDiv);
    }else if(buttons.textContent.includes("About")){
        const {coloredText ,p} = aboutPage();
        content.innerHTML = " ";
        content.style.marginTop = '100px';
        // content.style.height = '84vh';
        content.appendChild(coloredText);
        content.appendChild(p);        
    }
  });
});
