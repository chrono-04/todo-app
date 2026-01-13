import { completeTask } from "./completeTask.js";
import { loadLocalStorage } from "./storage.js";

function renderUi() {
  const taskList = document.querySelector(".tasks-list");
  const database = loadLocalStorage();

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  database.map(({ id, ...item }) => {
    const li = document.createElement("li");
    li.textContent = item.taskName;
    li.dataset.id = id;
    li.dataset.isCompleted = item.isCompleted;
    li.style.textDecoration = item.isCompleted ? "line-through" : "none";
    li.style.backgroundColor = item.isCompleted ? "gray" : "white";
    taskList.appendChild(li);

    li.addEventListener("click", completeTask);
  });
}

export { renderUi };
