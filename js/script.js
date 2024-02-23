const newTaskInput = document.getElementById("new-task-input");
const newTaskButton = document.getElementById("new-task-button");
const taskList = document.getElementById("task-list");

newTaskButton.addEventListener("click", function() {
  const newTask = document.createElement("li");
  newTask.textContent = newTaskInput.value;
  newTask.addEventListener("click", function() {
    newTask.classList.toggle("completed");
  });
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(newTask);
  });
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  newTaskInput.value = "";
});