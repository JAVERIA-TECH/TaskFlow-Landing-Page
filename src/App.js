import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// Naya component jo hum agle step mein banayein ge
const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput }]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-app-container">
      <h3>Free Version: Task Manager</h3>
      <div className="task-input-group">
        <input 
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState('dark'); // Default theme ko 'dark' kar diya

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <Header />
      <main>
        <Features />
        <Reviews />
        <Pricing TaskApp={TaskApp} />
      </main>
      <Footer />
    </div>
  );
}

export default App;