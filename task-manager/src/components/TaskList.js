import React from 'react';

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
          <button onClick={() => completeTask(index)}>✔</button>
          <button onClick={() => deleteTask(index)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
