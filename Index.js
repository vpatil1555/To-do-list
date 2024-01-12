document.addEventListener("DOMContentLoaded", function () {
  const todoList = document.getElementById("todo-list");
  const newTodoInput = document.getElementById("new-todo");
  const addButton = document.getElementById("add-button");

  addButton.addEventListener("click", function () {
    const todoText = newTodoInput.value.trim();
    if (todoText !== "") {
      addTodoItem(todoText);
      newTodoInput.value = "";
    }
  });

  function addTodoItem(text) {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
      <input type="checkbox">
      <span>${text}</span>
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    `;
    todoList.appendChild(listItem);

    const editButton = listItem.querySelector(".edit-button");
    const deleteButton = listItem.querySelector(".delete-button");

    editButton.addEventListener("click", function () {
      editTodoItem(listItem);
    });

    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });
  }

  function editTodoItem(listItem) {
    const textSpan = listItem.querySelector("span");
    const originalText = textSpan.textContent;
    const editText = prompt("Edit task:", originalText);

    if (editText !== null) {
      textSpan.textContent = editText;
    }
  }
});
