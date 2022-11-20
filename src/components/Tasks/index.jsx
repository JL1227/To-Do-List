import styles from "./Tasks.module.css";
import CreateTask from "../CreateTask";
import ShowTasks from "../ShowTasks";

import { useState, createContext, useEffect } from "react";


export const Context = createContext()

const Tasks = () => {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  // useEffect(() => setList(['T1', 'T2']), [])
  
  function addTask() {
    setList([...list, newItem]);
    setNewItem("");
  }

  function deleteTask(i) {
    console.log(i)
  }

  return (
    <Context.Provider value={{list, setList, newItem, setNewItem, addTask, deleteTask}}>
      <div className={styles.tasks}>
        <CreateTask />
        <ShowTasks />
      </div>
    </Context.Provider>
  );
};

export default Tasks;
