// Get the form, input, and list elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Add a submit event listener to the form
form.addEventListener('submit', addTodo);

// Function for adding a new to-do item
function addTodo(event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Create to-do item
  const todo = document.createElement('li');
  todo.classList.add('todo');
  todo.innerHTML = input.value + '<button class="btn"><i class="fa fa-close"></i></button>';
  
  // Add the to-do item to the list
  list.appendChild(todo);
  
  // Clear the input field
  input.value = '';
  

  // Add delete event listener to the button
  const deleteButton = todo.querySelector('button');
  deleteButton.addEventListener('click', deleteTodo);
}

// Function for deleting a to-do item
function deleteTodo(event) {
  // Get the to-do item to be deleted
  const todo = event.target.parentElement;
  
  // Remove the to-do item from the list
  list.removeChild(todo);
}
