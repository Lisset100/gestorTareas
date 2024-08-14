import { getTasks } from "./task";
export const renderTasks = () => {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  const tasks = getTasks();
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);

    if (task.completed === true) {
      li.classList.add('completed');
    }
    li.innerHTML = `
      ${task.text}
      <button class="delete">Eliminar</button>
      <button class="toggle">${task.completed === false ? 'completar' : 'Deshacer'}</button>
    `;

    // Agregar evento para eliminar la tarea
    li.querySelector('.delete').addEventListener('click', () => {
      deleteTask(task.id);
      renderTasks(); // Volver a renderizar la lista
    });
    taskList.appendChild(li);
  });
};
//option más la c rara es backtik