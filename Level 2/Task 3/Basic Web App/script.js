let tasks = [];
let completedTasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    if (task) {
        const newTask = {
            id: Date.now(),
            task: task,
            completed: false,
            createdAt: new Date()
        };
        tasks.push(newTask);
        updatePendingTasks();
        taskInput.value = '';
    }
}

function updatePendingTasks() {
    const pendingTasks = document.getElementById('pendingTasks');
    pendingTasks.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task.task));
        li.onclick = () => completeTask(task.id);
        pendingTasks.appendChild(li);
    });
}

function updateCompletedTasks() {
    const completedTasksList = document.getElementById('completedTasks');
    completedTasksList.innerHTML = '';
    completedTasks.forEach(task => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(task.task));
        completedTasksList.appendChild(li);
    });
}

function completeTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    const completedTask = tasks.splice(taskIndex, 1)[0];
    completedTask.completed = true;
    completedTasks.push(completedTask);
    updatePendingTasks();
    updateCompletedTasks();
}
