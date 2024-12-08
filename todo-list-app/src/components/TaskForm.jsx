import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ name: '', description: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);  // Pasar la tarea al TaskList
    setTask({ name: '', description: '', type: '' });  // Limpiar el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Descripción"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <select
        value={task.type}
        onChange={(e) => setTask({ ...task, type: e.target.value })}
        required
      >
        <option value="">Selecciona tipo</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Casa">Casa</option>
        <option value="Negocios">Negocios</option>
      </select>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;