import styles from "./ShowTasks.module.css";
import Task from "../Task";
import { Context } from "../Tasks";
import { useContext } from "react";

const ShowTasks = () => {

  const { list } = useContext(Context)

  return (
    <div className={styles.showTask}>
      <div className={styles.showTaskHeader}>
        <h2>Task</h2>
        <h2 className={styles.delete}>Delete</h2>
      </div>
      {list.map((task, index) => (
        <Task key={index} indice={index}/>
      ))}
    </div>
  );
};

export default ShowTasks;
