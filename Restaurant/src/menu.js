import image1 from "../th (6).jpeg";
import image2 from "../98b95c37-5a15-4d48-893b-574eec348f5d.webp";
import image3 from "../th (3).jpeg";
import image4 from "../th (5).jpeg";
import image5 from "../th (4).jpeg";
import image6 from "../th (2).jpeg";

export function MenuPage() {
  const imageArray = [{image:image1,Name:"Cheese Cake" ,price:"$30"}, {image:image2 , Name:"Rasbery Cake",price:"$10"}, {image:image3 , Name:"Honey Semiferedo",price:"$15"}, {image:image4 , Name:"Thanksgiving Desert",price:"$2"}, {image:image5 , Name:"Italian Desert",price:"$8"}, {image:image6 , Name:"Rasbery Cake",price:"$12"}];
  const body = document.body;
  const header = document.createElement("h2");
  const coloredText = document.createElement("h1");
  const gridContainer = document.createElement("div");

  header.textContent = "Discover";
  header.style.color = "white";
  coloredText.append("Our Menu");
  coloredText.style.color = "#dfac71";
  coloredText.style.marginTop = "-10px";

  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = "1fr 1fr";
  gridContainer.style.gridTemplateRows = "1fr 1fr 1fr";
  gridContainer.style.gap = "70px 1%";

  for (let i = 0; i < 6; i++) {
    const gridItem = document.createElement("div");
    const image = document.createElement("img");
    image.src = imageArray[i]['image'];
    image.style.width = "auto";
    image.style.height = "auto";
    image.style.maxWidth = "100px";
    image.style.maxHeight = "100px";
    image.style.borderRadius = "50px";

    // image.style.objectFit = 'contain'
    image.onload = () => {
      console.log("Image loaded successfully");
    };

    image.onerror = () => {
      console.error("Error loading image");
    };
    gridItem.appendChild(image);
    const foodDiv = document.createElement("div");
    gridItem.appendChild(foodDiv);
    const foodName = document.createElement("h2");
    foodName.textContent = imageArray[i]['Name'];
    foodDiv.style.marginLeft = "-200px";
    foodDiv.appendChild(foodName);
    const ingredients = document.createElement("h4");
    ingredients.textContent = "Mushroom / Pizza /Tomato";
    foodDiv.appendChild(ingredients);
    const price = document.createElement("h5");
    price.textContent = imageArray[i]['price'];
    gridItem.appendChild(price);
    gridItem.style.display = "flex";
    gridItem.style.justifyContent = "space-around";
    gridItem.style.gap = "40px";
    gridContainer.appendChild(gridItem);
  }

  return { header, coloredText, gridContainer };
}
