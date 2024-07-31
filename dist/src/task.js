//Lista de tareas
let task = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agragar tareas
export const addTask = (task) => {
  const newTask = {
    id: Date.now(),
    text: task,
    completed: false
  };
  task.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

//Función para traer la lista de tareas
export const getTasks = () => tasks;
