import styles from "./ShowTasks.module.css";
import Task from "../Task";

const ShowTasks = () => {
  return (
    <div className={styles.showTask}>
      <div className={styles.showTaskHeader}>
        <h2>Task</h2>
        <h2>Description</h2>
        <h2 className={styles.delete}>Delete</h2>
      </div>
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default ShowTasks;
