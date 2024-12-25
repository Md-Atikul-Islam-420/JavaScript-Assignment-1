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

    // Complete button
    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn btn-success btn-sm me-1';
    completeBtn.innerHTML = '✔';
    completeBtn.addEventListener('click', () => {
      taskSpan.style.textDecoration = taskSpan.style.textDecoration === 'line-through' ? '' : 'line-through';
    });

   // Edit button
   const editBtn = document.createElement('button');
   editBtn.className = 'btn btn-warning btn-sm me-1';
   editBtn.innerHTML = '✎';
   editBtn.addEventListener('click', () => {
     const newTaskText = prompt('Edit task:', taskSpan.textContent);
     if (newTaskText !== null && newTaskText.trim() !== '') {
       taskSpan.textContent = newTaskText.trim();
     }
   });


   // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.innerHTML = '🗑';
    deleteBtn.addEventListener('click', () => {
      todoList.removeChild(listItem);
    });

    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(deleteBtn);

    listItem.appendChild(taskSpan);
    listItem.appendChild(actionsDiv);

    todoList.appendChild(listItem);
  }


