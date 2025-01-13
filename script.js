// Array para armazenar as tarefas
let tasks = [];

// Função para renderizar as tarefas na tela
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Limpa a lista para evitar duplicação

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        if (task.completed) taskItem.classList.add('completed');

        // Texto da tarefa
        const taskText = document.createElement('span');
        taskText.textContent = task.text;

        // Botão para marcar como concluído
        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Desmarcar' : 'Concluir';
        completeButton.addEventListener('click', () => toggleComplete(index));

        // Botão para remover a tarefa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.addEventListener('click', () => deleteTask(index));

        taskItem.appendChild(taskText);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    });
}

// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = ''; // Limpa o campo de input
        renderTasks();
    } else {
        alert('Digite uma tarefa antes de adicionar!');
    }
}

// Função para marcar/desmarcar tarefa como concluída
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Função para remover uma tarefa
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Adiciona evento ao botão "Adicionar"
document.getElementById('add-task-btn').addEventListener('click', addTask);
