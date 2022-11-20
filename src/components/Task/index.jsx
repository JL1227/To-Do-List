import styles from "./Task.module.css";
import { useContext } from "react";
import { Context } from '../Tasks'


const Task = ({ indice }) => {
  
  const {deleteTask} = useContext(Context)

  return (
    <div className={styles.Task}>
      <p>Tarefa</p>
      <button type="button" className={styles.taskButton}>X</button>
    </div>
  );
};

export default Task;
