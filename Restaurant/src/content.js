const bodyElement = document.body;
const welcomeText = document.createElement("h1");
const br = document.createElement("br");
const i = document.createElement("i");
const p = document.createElement("p");
const pBr = document.createElement("br");
const btnDiv = document.createElement("div");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const iconsDiv = document.createElement("div");
const twitter = document.createElement("span");

i.textContent = "Welcome To";
welcomeText.textContent = "DELICIOUS CAFE";

welcomeText.prepend(br);
welcomeText.prepend(i);

p.textContent =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
p.append(pBr);
p.append("sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");

btnDiv.classList.add("buttons");
btn1.textContent = "Book Table";
btn2.textContent = "View Menu";
btnDiv.appendChild(btn1);
btnDiv.appendChild(btn2);

// twitter.innerHTML = '<i class="fa-brands fa-twitter"></i>';
// iconsDiv.classList.add('iconsDiv');
// iconsDiv.style.border='1px solid black';
// iconsDiv.appendChild(twitter);

export { welcomeText, p, btnDiv };
