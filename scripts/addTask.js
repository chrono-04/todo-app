import { renderUi } from "./renderui.js";
import { loadLocalStorage, saveToLocalStorage } from "./storage.js";

function addTask() {
  const taskName = document.getElementById("taskName");

  const data = {
    id: crypto.randomUUID(),
    taskName: taskName.value,
    isCompleted: false,
  };

  const database = loadLocalStorage();
  database.push(data);
  saveToLocalStorage(database);
  renderUi();

  taskName.value = "";
}

export { addTask };
