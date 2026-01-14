import { addTask } from "./addTask.js";
import { renderUi } from "./renderui.js";
import { renderBySort } from "./taskSorter.js";

const addTaskBtn = document.querySelector(".add-task-btn");
const sortMenu = document.getElementById("sortButtons");

renderUi();
addTaskBtn.addEventListener("click", addTask);

sortMenu.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "sortAll":
      renderUi();
      break;
    case "sortHigh":
      renderBySort("High");
      break;
    case "sortMedium":
      renderBySort("Medium");
      break;
    case "sortLow":
      renderBySort("Low");
      break;
    case "sortBacklog":
      renderBySort("Backlog");
      break;
  }
});
