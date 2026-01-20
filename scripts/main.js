import { addTask } from "./addTask.js";
import { renderUi } from "./renderui.js";
import { renderBySort } from "./taskSorter.js";

const addTaskBtn = document.querySelector(".add-task-btn");
const sortMenu = document.getElementById("sortButtons");

renderUi();
addTaskBtn.addEventListener("click", addTask);

sortMenu.addEventListener("input", (event) => {
  let target = event.target;

  switch (target.value) {
    case "All":
      renderUi();
      break;
    case "High":
      renderBySort("High");
      break;
    case "Medium":
      renderBySort("Medium");
      break;
    case "Low":
      renderBySort("Low");
      break;
    case "Backlog":
      renderBySort("Backlog");
      break;
  }
});
