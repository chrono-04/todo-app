function loadLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks-database") || "[]");
}

function saveToLocalStorage(arr) {
  localStorage.setItem("tasks-database", JSON.stringify(arr));
}

export { loadLocalStorage, saveToLocalStorage };
