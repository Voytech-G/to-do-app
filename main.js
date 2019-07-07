const addBtn = document.querySelector("#addButton");
const searchBtn = document.querySelector("#searchButton");
const addInput = document.querySelector("#add");
const searchInput = document.querySelector("#search");
const ul = document.querySelector("ul");
const tasks = [];
const span = document.querySelector("h2 span");


const render = () => {
  ul.textContent = "";
  tasks.forEach((element, key) => {
    element.dataset.key = key;
    ul.appendChild(element);
  })
  span.textContent = tasks.length;
}

const removeTask = (e) => {
  const index = e.target.parentNode.dataset.key;
  tasks.splice(index, 1);
  render();
}

const addTask = (e) => {
  e.preventDefault();
  const task = document.createElement("li");
  task.className = "task";
  const taskName = addInput.value;
  if (taskName == "") return;
  task.innerHTML = taskName + " <button>Usuń</button>";
  ul.appendChild(task);
  addInput.value = "";
  tasks.push(task);
  task.querySelector("button").addEventListener("click", removeTask);
  render();
}

const searchTask = () => {
  const searchedTask = searchInput.value.toLowerCase();
  tasks.forEach((element, key) => {
    if (element.textContent.toLowerCase().includes(searchedTask)) {
      element.style.display = "list-item";
    } else {
      element.style.display = "none";
    }
  })

  render();
}


addBtn.addEventListener("click", addTask);
searchBtn.addEventListener("click", searchTask);