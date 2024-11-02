import "./style.css";
import { format, compareAsc } from "date-fns";
import img from "../close.png";
import bin from "../bin.png";
const btnAdd = document.querySelector("#btnAdd");
const btnAddTask = document.querySelector("#btnAddTask");
const main = document.querySelector(".item3");
const todos = document.querySelector(".todos");
const imgs = document.createElement("img");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");
const btnClose = document.querySelector(".btnClose");
let btnSubmit = document.querySelector("#btnSubmit");
const project = document.querySelector("#project");
const item2 = document.querySelector(".item2");
const h1 = document.querySelector(".h1");
const formH1 = document.querySelector("h1");

let myTodos = [];
const myProjects = [
  { value: 1, name: "All" },
  { value: 1, name: "Completed" },
  { value: 1, name: "Personal" },
  { value: 1, name: "Work" },
];
myProjects.forEach((projects) => {
  const option = document.createElement("option");
  option.value = projects.value;
  option.textContent = projects.name;
  project.append(option);
});

imgs.src = img;
imgs.classList.add("btnClose");

function showProjects() {
  let items = JSON.parse(localStorage.getItem("myTodos"));
  let allItems = [];
  allItems = myTodos;
  console.log("my todos", allItems);

  myProjects.forEach((project) => {
    const showCount = document.createElement("label");
    const pr = document.createElement("div");
    const prTitle = document.createElement("div");
    const checkboxes = document.createElement("input");
    const prLabel = document.createElement("label");
    const showCountLabel = document.createElement("label");
    pr.classList.add("pr");

    prTitle.classList.add("pr-title");
    checkboxes.type = "checkbox";
    prLabel.textContent = project.name;
    prTitle.appendChild(checkboxes);
    prTitle.append(prLabel);
    let projectCount;
    showCount.classList.add("showCount");
    if (project.name == "All") {
      projectCount = myTodos;
    } else {
      projectCount = myTodos.filter((todo) => {
        return todo.project === project.name;
      });
    }

    showCountLabel.textContent = projectCount.length;
    showCount.appendChild(showCountLabel);
    pr.appendChild(prTitle);
    pr.append(showCount);
    item2.append(pr);

    prLabel.addEventListener("click", (e) => {
      if (e.target.textContent === "All") {
        todos.innerHTML = "";
        showTodos(null);
      } else {
        let filteredTodo = allItems.filter((todo) => {
          return todo.project === e.target.textContent;
        });
        todos.innerHTML = "";
        showTodos(filteredTodo);
      }
    });
  });
}

function Todos(title, description, priority, startdate, enddate, project) {
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.startdate = startdate;
  this.enddate = enddate;
  this.project = project;
}
function addTodo(title, description, priority, dateStart, dateEnd, project) {
  const newTodo = new Todos(
    title,
    description,
    priority,
    dateStart,
    dateEnd,
    project
  );
  myTodos.push(newTodo);
  localStorage.setItem("myTodos", JSON.stringify(myTodos));
}
function showTodos(filteredTodo) {
  todos.innerHTML = "";
  myTodos = filteredTodo || JSON.parse(localStorage.getItem("myTodos"));

  myTodos.forEach((item, index) => {
    console.log("todos", myTodos);
    console.log("Item", index, item);

    const todoItems = document.createElement("div");
    const title = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    const dateLabel = document.createElement("label");
    const bins = document.createElement("img");

    bins.src = bin;
    bins.addEventListener("click", (e) => {
      myTodos = myTodos.filter((todo) => {
        return todo != item;
      });
      localStorage.setItem("myTodos", JSON.stringify(myTodos));
      showTodos();
    });
    todoItems.classList.add("todoItems");
    title.style.display = "flex";
    title.style.gap = "7px";

    input.type = "checkbox";
    label.textContent = item.title;
    label.style.cursor = "pointer";

     
    input.checked = item.project === "Completed";
    input.addEventListener("change", (e) => {
      if (e.target.checked) {
        todoItems.classList.toggle("completed", item.completed);
      }else{
        todoItems.classList.remove("completed");

      }
    });
    if (item.project === "Completed") {
      todoItems.classList.add("completed");
    }
   
    dateLabel.textContent =
      format(item.startdate, "HH:mm") + " - " + format(item.enddate, "HH:mm");
    dateLabel.classList.add("dateLabel");
    dateLabel.append(bins);

    title.appendChild(input);
    title.append(label);
    todoItems.appendChild(title);
    todoItems.append(dateLabel);
    todos.appendChild(todoItems);

    input.addEventListener("click", () => {
      item.project = input.checked ? "Completed" : "Incomplete";
      localStorage.setItem("myTodos", JSON.stringify(myTodos));
      console.log("item after clicked", myTodos);
    });

    label.addEventListener("click", () => editTodoLabel(item, index));
  });
}

function editTodoLabel(todo, index) {
  form.style.display = "block";
  overlay.style.display = "flex";
  formH1.textContent = "Edit Todo";
  imgs.src = img;
  imgs.classList.add("btnClose");
  formH1.append(imgs);

  document.querySelector("#title").value = todo.title;
  document.querySelector("#comments").value = todo.description;
  document.querySelector("#priority").value = todo.priority;
  document.querySelector("#dateStart").value = new Date(todo.startdate)
    .toISOString()
    .slice(0, 16);
  document.querySelector("#dateEnd").value = new Date(todo.enddate)
    .toISOString()
    .slice(0, 16);
  document.querySelector("#project").value = todo.project;

  btnSubmit.textContent = "Edit todo";

  btnSubmit.replaceWith(btnSubmit.cloneNode(true));
  btnSubmit = document.querySelector("#btnSubmit");

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    if (btnSubmit.textContent === "Edit todo") {
      todo.title = document.querySelector("#title").value;
      todo.description = document.querySelector("#comments").value;
      todo.priority = document.querySelector("#priority").value;
      todo.startdate = document.querySelector("#dateStart").value;
      todo.enddate = document.querySelector("#dateEnd").value;

      localStorage.setItem("myTodos", JSON.stringify(myTodos));
      showTodos();
      form.style.display = "none";
      overlay.style.display = "none";
      console.log("Updated todo:", todo);
    }
  });
}

showTodos();
showProjects();
btnAddTask.addEventListener("click", () => {
  form.style.display = "block";
  overlay.style.display = "flex";
  formH1.textContent = "New Todo";
  btnSubmit.textContent = "Save Todo";

  formH1.append(imgs);
});
btnSubmit.addEventListener("click", (e) => {
  if (formH1.textContent === "New Todo") {
    e.preventDefault();
    form.style.display = "none";
    overlay.style.display = "none";
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#comments").value;
    const priority = document.querySelector("#priority").value;
    const dateStart = document.querySelector("#dateStart").value;
    const dateEnd = document.querySelector("#dateEnd").value;
    const projectOptions = project.options[project.selectedIndex].text;

    console.log(dateEnd, "End date");

    form.style.display = "block";
    overlay.style.display = "flex";
    addTodo(title, description, priority, dateStart, dateEnd, projectOptions);
    console.log(myTodos);
    item2.innerHTML = " ";
    item2.appendChild(h1);
    item2.append(btnAdd);
    showProjects();
    showTodos();
  }
});
console.log("closed ", btnClose);

imgs.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "none";
  overlay.style.display = "none";

  const title = (document.querySelector("#title").value = " ");
  const description = (document.querySelector("#comments").value = " ");
  const priority = (document.querySelector("#priority").value = " ");
  const dateStart = (document.querySelector("#dateStart").value = " ");
  const dateEnd = (document.querySelector("#dateEnd").value = " ");
});
console.log(myTodos);
