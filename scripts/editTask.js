function editTask(e) {
  e.stopPropagation();
  const taskId = e.target.dataset.id;
  console.log(taskId);
}

export { editTask };
