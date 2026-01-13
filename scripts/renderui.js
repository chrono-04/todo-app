import { completeTask } from "./completeTask.js";
import { deleteTask } from "./deleteTask.js";
import { loadLocalStorage } from "./storage.js";

function renderUi() {
  const taskList = document.querySelector(".tasks-list");
  const database = loadLocalStorage();

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  database.map(({ id, ...item }) => {
    const li = document.createElement("li");
    const isCompleted = item.isCompleted;
    li.textContent = item.taskName;
    li.dataset.id = id;
    li.dataset.isCompleted = item.isCompleted;
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.dataset.id = id;
    li.appendChild(delBtn);
    Object.assign(li.style, {
      textDecoration: isCompleted ? "line-through" : "none",
      color: isCompleted ? "gray" : "black",
      backgroundColor: isCompleted ? "#1F2127" : "white",
    });
    taskList.appendChild(li);

    li.addEventListener("click", completeTask);
    delBtn.addEventListener("click", deleteTask);
  });
}

export { renderUi };
