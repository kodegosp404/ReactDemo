import { useState } from "react";
import { TaskCard } from "./TaskCard";

export const TaskList = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1010, name: "Record React lectures", completed: true },
    { id: 2573, name: "Edit React lectures", completed: true },
    { id: 3585, name: "Watch Lectures", completed: true },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <h1>Task List</h1>
      <p></p>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
    </>
  );
};
