import { addTask } from "./addTask.js";
import { renderUi } from "./renderui.js";
import { renderBySort } from "./taskSorter.js";
import { renderByDeadline } from "./sortByDeadline.js";

const addTaskBtn = document.querySelector(".add-task-btn");
const sortMenu = document.getElementById("sortButtons");
const todayBtn = document.getElementById("todaysTasks");
const upcomingBtn = document.getElementById("upcomingTasks");
const overdueBtn = document.getElementById("overdueTasks");

addTaskBtn.addEventListener("click", addTask);
todayBtn.addEventListener("click", () => {
  renderByDeadline("Today");
  console.log("Tasks Today");
});

upcomingBtn.addEventListener("click", () => {
  renderByDeadline("Upcoming");
  console.log("Upcoming Tasks");
});

overdueBtn.addEventListener("click", () => {
  renderByDeadline("Overdue");
  console.log("Overdue Tasks");
});

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

renderUi();
