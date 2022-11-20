import styles from "./Task.module.css";
import { useContext } from "react";
import { Context } from '../Tasks'


const Task = ({ indice, task }) => {
  
  const {deleteTask, } = useContext(Context)

  return (
    <div className={styles.Task}>
      <p>{task}</p>
      <div>
        <button type="button" className={styles.taskButton} onClick={() => deleteTask(indice)}>X</button>
      </div>
    </div>
  );
};

export default Task;
