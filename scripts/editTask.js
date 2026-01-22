import { completeTask } from "./completeTask.js";
import { renderUi } from "./renderui.js";
import { loadLocalStorage, saveToLocalStorage } from "./storage.js";

function editTask(e) {
  e.stopPropagation();
  const taskId = e.target.dataset.id;
  const li = e.target.closest("li");
  console.log(taskId);
  console.log(li.dataset.taskName);
  console.log(li.dataset.label);
  console.log(li.dataset.date);

  const newTaskName = document.createElement("input");
  newTaskName.value = li.dataset.taskName;
  const newDate = document.createElement("input");
  newDate.type = "date";
  newDate.value = li.dataset.date;
  const newLabel = document.createElement("select");
  const labelCollection = ["High", "Medium", "Low", "Backlog"];
  labelCollection.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    newLabel.appendChild(option);
  });

  const controlContainer = document.createElement("span");
  const saveBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  cancelBtn.textContent = "Cancel";
  controlContainer.appendChild(saveBtn);
  controlContainer.appendChild(cancelBtn);

  // class styling
  li.classList.toggle("edit-form");
  newTaskName.classList.toggle("edit-field");
  newLabel.classList.toggle("edit-field");
  newDate.classList.toggle("edit-field");
  saveBtn.classList.toggle("action-btn");
  saveBtn.classList.toggle("save-task-btn");
  cancelBtn.classList.toggle("action-btn");
  cancelBtn.classList.toggle("cancel-btn");

  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  li.appendChild(newTaskName);
  li.appendChild(newLabel);
  li.appendChild(newDate);
  li.appendChild(controlContainer);
  li.removeEventListener("click", completeTask);

  cancelBtn.addEventListener("click", renderUi);

  function saveTask() {
    newTaskName.value = newTaskName.value.trim();
    if (
      newTaskName.value === "" ||
      newLabel.value === "" ||
      newDate.value === ""
    ) {
      alert("Invalid input. Try again.");
      return;
    }

    const database = loadLocalStorage();
    const updatedDatabase = database.map((item) => {
      return item.id === taskId
        ? {
            ...item,
            taskName: newTaskName.value,
            label: newLabel.value,
            date: newDate.value,
          }
        : item;
    });
    saveToLocalStorage(updatedDatabase);
    renderUi();
  }

  saveBtn.addEventListener("click", saveTask);
}

export { editTask };
