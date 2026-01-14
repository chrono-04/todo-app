import { completeTask } from "./completeTask.js";
import { deleteTask } from "./deleteTask.js";
import { editTask } from "./editTask.js";
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
    const label = document.createElement("p");
    const task = document.createElement("p");
    const div = document.createElement("div");

    task.textContent = item.taskName;
    label.textContent = `#${item.label}`;
    task.classList.toggle("task-name");
    label.classList.toggle("label-name");
    div.classList.add("task-info");
    div.style.textDecoration = isCompleted ? "line-through" : "none";
    div.appendChild(task);
    div.appendChild(label);

    li.dataset.id = id;
    li.dataset.isCompleted = item.isCompleted;
    li.appendChild(div);

    const actionDiv = document.createElement("div");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    editBtn.dataset.id = id;
    delBtn.textContent = "Delete";
    delBtn.dataset.id = id;
    editBtn.classList.toggle("action-btn");
    editBtn.classList.toggle("edit-btn");
    delBtn.classList.toggle("action-btn");
    delBtn.classList.toggle("del-btn");

    actionDiv.appendChild(editBtn);
    actionDiv.appendChild(delBtn);
    actionDiv.classList.toggle("action-container");
    li.appendChild(actionDiv);

    // styling
    Object.assign(li.style, {
      color: isCompleted ? "gray" : "ghostwhite",
      backgroundColor: isCompleted ? "#1F2127" : "#2B2F37",
      borderRadius: "10px",
      border: "2px solid #11A461",
      display: "flex",
      justifyContent: "space-between",
    });

    taskList.appendChild(li);

    li.addEventListener("click", completeTask);
    editBtn.addEventListener("click", editTask);
    delBtn.addEventListener("click", deleteTask);
  });
}

export { renderUi };
