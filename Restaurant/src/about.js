import image1 from "../th (6).jpeg";
import image2 from "../98b95c37-5a15-4d48-893b-574eec348f5d.webp";
import image3 from "../th (3).jpeg";
import image4 from "../th (5).jpeg";
import image5 from "../th (4).jpeg";
import image6 from "../th (2).jpeg";

export function aboutPage() {
  const body = document.body;
  const header = document.createElement("h2");
  const coloredText = document.createElement("h1");
  const gridContainer = document.createElement("div");
  const p = document.createElement("p");
  const pBr = document.createElement("br");

  header.textContent = "Discover";
  header.style.color = "white";
  coloredText.append("About Us");
  coloredText.style.color = "#dfac71";
  coloredText.style.marginTop = "-10px";

  p.textContent =
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  p.append(pBr);

p.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
p.append(pBr);

p.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
p.append(pBr);

p.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

p.style.color = 'white'
  return { coloredText  , p};
}
