import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const TaskList = ({ info }) => {
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
            <TaskCard
              key={task.id}
              info={info}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem success</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          exercitationem.
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem Warning</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          exercitationem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          officiis assumenda, harum praesentium mollitia exercitationem?
        </p>
      </BoxCard>
    </>
  );
};
