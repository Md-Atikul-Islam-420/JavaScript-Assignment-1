//Variable create

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task function
addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText === '') {
      alert('Please enter a value!');
      return;
    }
     addTask(taskText);
     todoInput.value = ''; // Clear the input field
  });