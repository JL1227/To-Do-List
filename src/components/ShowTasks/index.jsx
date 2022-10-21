import styles from "./ShowTasks.module.css";

const ShowTasks = () => {
  return (
    <div className={styles.showTask}>
      <div className={styles.showTaskHeader}>
        <h2>Task</h2>
        <h2>Description</h2>
        <h2>Delete</h2>
      </div>
    </div>
  );
};

export default ShowTasks;
