import React, { useState } from 'react';
import TaskForm from './TaskForm';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Función para agregar tareas
  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  // Función para marcar tarea como completada
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Función para eliminar tarea
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="tasklist-container">
      {/* Columna para el formulario */}
      <div className="tasklist-column">
        <h2>Crear Tarea</h2>
        <TaskForm addTask={addTask} />
      </div>

      {/* Columna para tareas pendientes */}
      <div className="tasklist-column">
        <h2>Tareas Pendientes</h2>
        {tasks.filter((task) => !task.completed).length === 0 && (
          <p>No hay tareas pendientes</p>
        )}
        <ul>
          {tasks
            .filter((task) => !task.completed)
            .map((task, index) => (
              <li key={index} className="task-item">
                <p><strong>Título:</strong> {task.name}</p>
                <p><strong>Tipo:</strong> {task.type}</p>
                <p><strong>Descripción:</strong> {task.description}</p>
                <div>
                  <button
                    className="complete-button"
                    onClick={() => toggleComplete(index)}
                  >
                    Completar
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* Columna para tareas completadas */}
      <div className="tasklist-column">
        <h2>Tareas Completadas</h2>
        {tasks.filter((task) => task.completed).length === 0 && (
          <p>No hay tareas completadas</p>
        )}
        <ul>
          {tasks
            .filter((task) => task.completed)
            .map((task, index) => (
              <li key={index} className="task-item">
                <p><strong>Título:</strong> {task.name}</p>
                <p><strong>Tipo:</strong> {task.type}</p>
                <p><strong>Descripción:</strong> {task.description}</p>
                <div>
                  <button
                    className="incomplete-button"
                    onClick={() => toggleComplete(index)}
                  >
                    Marcar como Pendiente
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;