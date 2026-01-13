import { renderUi } from "./renderui.js";
import { loadLocalStorage, saveToLocalStorage } from "./storage.js";

function completeTask(e) {
  const itemId = e.target.dataset.id;
  let isCompleted = e.target.dataset.isCompleted === "true";

  isCompleted = !isCompleted;
  console.log(isCompleted);
  const li = e.target;
  li.style.textDecoration = isCompleted ? "line-through" : "none";
  li.style.backgroundColor = isCompleted ? "gray" : "white";

  const database = loadLocalStorage();
  const updatedDatabse = database.map((item) => {
    return item.id === itemId
      ? {
          ...item,
          isCompleted: isCompleted,
        }
      : item;
  });
  saveToLocalStorage(updatedDatabse);
  renderUi();
}

export { completeTask };
