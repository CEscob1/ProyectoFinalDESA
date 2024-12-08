import React from 'react';

const TaskDetails = ({ task, closeDetails }) => {
  return (
    <div>
      <h3>Detalles de la Tarea</h3>
      <p><strong>Título:</strong> {task.name}</p>
      <p><strong>Descripción:</strong> {task.description}</p>
      <p><strong>Tipo:</strong> {task.type}</p>
      <p><strong>Estado:</strong> {task.completed ? 'Completada' : 'Pendiente'}</p>
      <button onClick={closeDetails}>Cerrar</button>
    </div>
  );
};

export default TaskDetails;