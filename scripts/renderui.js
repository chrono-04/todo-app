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

    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    editBtn.dataset.id = id;
    delBtn.textContent = "🗑️";
    delBtn.dataset.id = id;
    editBtn.style.margin = "0 5px";
    delBtn.style.margin = "0 5px";

    span.appendChild(editBtn);
    span.appendChild(delBtn);
    li.appendChild(span);

    // styling
    Object.assign(li.style, {
      textDecoration: isCompleted ? "line-through" : "none",
      color: isCompleted ? "gray" : "ghostwhite",
      backgroundColor: isCompleted ? "#1F2127" : "#2B2F37",
      borderRadius: "10px",
      border: "2px solid #11A461",
      display: "flex",
      justifyContent: "space-between",
    });

    taskList.appendChild(li);

    li.addEventListener("click", completeTask);
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log(editBtn.dataset.id);
    });
    delBtn.addEventListener("click", deleteTask);
  });
}

export { renderUi };
