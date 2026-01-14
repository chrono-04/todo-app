import { renderUi } from "./renderui.js";
import { loadLocalStorage, saveToLocalStorage } from "./storage.js";

function deleteTask(e) {
  e.stopPropagation();
  const itemId = e.target.dataset.id;

  const database = loadLocalStorage();
  const updatedDatabase = database.filter((item) => item.id !== itemId);
  saveToLocalStorage(updatedDatabase);
  renderUi();
}

export { deleteTask };
