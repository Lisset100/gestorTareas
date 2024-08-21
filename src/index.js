import confetti from "canvas-confetti";
import { addTask, deleteTask, updateTask } from "./task";
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
//Agregar el evento para los botones
document.getElementById('task-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const taskId = e.target.parentElement.getAttribute('data-id');
    deleteTask(taskId);
    renderTasks();
  }
  if (e.target.classList.contains('toggle')) {
    const taskId = e.target.parentElement.getAttribute('data-id');
    updateTask(taskId);
    renderTasks();

    if (e.target.innerText === 'completar') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }


      });
    }
  }
});
