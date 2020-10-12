var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// My note: PLACE THIS FUNCTION BEFORE addEventListner
var createTaskHandler = function(event) {

  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  console.log(taskTypeInput);
  // Create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  tasksToDoEl.appendChild(listItemEl);

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

  listItemEl.appendChild(taskInfoEl);
  
};

formEl.addEventListener("submit", createTaskHandler);



