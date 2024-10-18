const btn = document.querySelector("#btn");
const container = document.querySelector("#container");
const form = document.querySelector(".form-body");
const btnSubmit = document.querySelector("#btnSubmit");

let myLibrary = [];
let myImages = ['']
function Book(title, author, yearPublished, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.yearPublished = yearPublished;
  this.read = read;
}

function displayBook() {
  myLibrary.forEach((each) => {
    const cards = document.createElement("div");
    cards.style.width = "25%";
    cards.classList.add("cards");

    const divcontainer = document.createElement("span");
    divcontainer.innerHTML = `<i class="fa-solid fa-trash" id="icon" style="cursor: pointer;"></i>`;
    divcontainer.style.color = "black";
    divcontainer.classList.add("icon");
    divcontainer.addEventListener("click", (e) => {
      myLibrary = myLibrary.filter((filtered) => {
        return filtered != each;
      });

      container.innerHTML = "";
      displayBook();
    });
    cards.appendChild(divcontainer);

    const toogle = document.createElement("input");
    toogle.type = "checkbox";
    toogle.style.backgroundColor = "black";
    toogle.classList.add("icon");
    if ([each.read][0]) {
      toogle.checked = true;
      toogle.textContent = "Read"
    }

    toogle.addEventListener("change", (e) => {
      console.log("checked outside");
      console.log("is checked" , e.target.checked);
      
      if (e.target.checked){
        console.log("checked inside");
        myLibrary = myLibrary.filter((filtered) => {
          
          if(filtered === each){
            filtered.read = true
            console.log(each);
            
            console.log("filterChecked",  filtered);
          }
          return filtered;
        });
      } else {

        myLibrary = myLibrary.filter((filtered) => {
          if(filtered === each){
            filtered.read = false
            console.log(each);
            
            console.log("filterChecked",  filtered);
          }
          return filtered;
        });        
      }
      container.innerHTML = " "
      displayBook();
    });
    cards.appendChild(toogle);
    const images = document.createElement("img");
    images.style.width = "50%";
    images.src = "./assets/image.png";
    cards.appendChild(images);

    const title = document.createElement("h2");
    const boldPart = document.createElement("span");
    boldPart.textContent = "Title: ";
    boldPart.style.fontWeight = "bolder";
    const restOfTitle = document.createTextNode(" " + [each.title]);

    title.appendChild(boldPart);
    title.appendChild(restOfTitle);
    cards.appendChild(title);

    const author = document.createElement("h3");
    author.textContent = "Author: " + [each.author];
    cards.appendChild(author);

    const pageNo = document.createElement("p");
    pageNo.textContent = [each.pages];
    cards.appendChild(pageNo);

    const yearPublished = document.createElement("p");
    yearPublished.textContent = [each.yearPublished];
    cards.appendChild(yearPublished);

    container.appendChild(cards);
  });
}

btn.addEventListener("click", () => {
  form.style.display = "block";
});

function addBook(title, author, pages, yearPublished, read) {
  const newbook = new Book(title, author, pages, yearPublished, read);
  return myLibrary.push(newbook);
}

addBook("To Kill a Mockingbird", "Harper Lee", 1960, 281, false);
addBook("1984", "George Orwell", 1949, 328, true);
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180, false);
addBook("Moby Dick", "Herman Melville", 1851, 635, true);
addBook("Pride and Prejudice", "Jane Austen", 1813, 279, true);
addBook("The Catcher in the Rye", "J.D. Salinger", 1951, 214, false);
addBook("Brave New World", "Aldous Huxley", 1932, 268, false);
addBook("The Hobbit", "J.R.R. Tolkien", 1937, 310, true);

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const pageNo = document.querySelector("#pageNo").value;
  const author = document.querySelector("#author").value;
  const year = document.querySelector("#year").value;

  const mybook = addBook(title, author, pageNo, year);
  console.log(mybook);

  document.querySelector("#title").value = "";
  document.querySelector("#pageNo").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#year").value = "";

  container.innerHTML = "";
  displayBook();
});

displayBook();
