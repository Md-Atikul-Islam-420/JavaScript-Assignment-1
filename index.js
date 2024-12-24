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


  // Function to add a new to-do item
  function addTask(taskText) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const actionsDiv = document.createElement('div');
