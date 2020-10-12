var formEl = document.querySelector("#task-form");

// IMPORTANT: PLACE THIS FUNCTION BEFORE EventListner
var createTaskHandler = function(event) {

  event.preventDefault();

  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTaskHandler);



