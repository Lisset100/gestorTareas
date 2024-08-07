import { addTask } from "./task";
import { renderTasks } from "./ui";

document.addEventListener('DOMContentLoaded', () => {
  //hacemos visible la lista de tareas
  renderTasks();
  //agregamos evento al formulario
  document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    if (taskInput.value !== '') {
      //Agregamos la tarea
      addTask(taskInput.value);
      // volvemos a cargar la lista de tareass
      renderTasks();
      //limpiar el input
      document.getElementById('task-input').value = '';
    }
  });
});