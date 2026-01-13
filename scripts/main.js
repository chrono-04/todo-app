import { addTask } from "./addTask.js";
import { renderUi } from "./renderui.js";

const addTaskBtn = document.querySelector(".add-task-btn");

renderUi();
addTaskBtn.addEventListener("click", addTask);
