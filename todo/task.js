document.addEventListener("DOMContentLoaded", function() {
    const tasksForm = document.getElementById("tasks__form");
    const taskInput = document.getElementById("task__input");
    const tasksList = document.getElementById("tasks__list");
  
    tasksForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const taskTitle = taskInput.value.trim();
      if (taskTitle !== "") {
        createTask(taskTitle);
        taskInput.value = "";
      }
    });
  
    function createTask(title) {
      const task = document.createElement("div");
      task.className = "task";
      task.innerHTML = `
        <div class="task__title">${title}</div>
        <a href="#" class="task__remove">&times;</a>
      `;
      const removeButton = task.querySelector(".task__remove");
      removeButton.addEventListener("click", function(event) {
        event.preventDefault();
        task.remove();
      });
      tasksList.appendChild(task);
    }
  });
  