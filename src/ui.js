import { getTasks } from './task';

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

   <div class='buttons' data-id="${task.id}">
      <button class='delete'>Eliminar</button>
      <button class='toggle'>${task.completed === false ? 'completar' : 'Deshacer'}</button>
      </div>
    `;

    taskList.appendChild(li);
  });
};
//option más la c rara es backtik