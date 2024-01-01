// todo.js
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <input type="checkbox" onchange="completeTask(this)">
            <span>${taskInput.value}</span>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

// todo.js
function completeTask(checkbox) {
    const task = checkbox.parentNode;
    task.classList.toggle('completed', checkbox.checked);
}
// todo.js
function deleteTask(button) {
    const task = button.parentNode;
    task.parentNode.removeChild(task);
}
// todo.js
function editTask(button) {
    const task = button.parentNode;
    const span = task.querySelector('span');
    const newTaskText = prompt('Edit task:', span.innerText);

    if (newTaskText !== null) {
        span.innerText = newTaskText;
    }
}
// todo.js
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    savedTasks.forEach(taskText => {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <input type="checkbox" onchange="completeTask(this)">
            <span>${taskText}</span>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
    });
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = Array.from(taskList.children).map(task => task.querySelector('span').innerText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}