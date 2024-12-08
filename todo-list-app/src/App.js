import React from 'react';
import TaskList from './components/TaskList'; // Asegúrate de la ruta correcta

const App = () => {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskList />
    </div>
  );
};

export default App;