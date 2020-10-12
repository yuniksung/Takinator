var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// My note: PLACE THIS FUNCTION BEFORE addEventListner
var taskFormHandler = function(event) {

  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
  
};

var createTaskEl = (taskDataObj) => {
   // Create list item
   var listItemEl = document.createElement("li");
   listItemEl.className = "task-item";
   // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

  
  tasksToDoEl.appendChild(listItemEl);

  listItemEl.appendChild(taskInfoEl);
}

formEl.addEventListener("submit", taskFormHandler);



