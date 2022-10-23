import styles from "./CreateTask.module.css";

const CreateTask = () => {
  return (
    <div className={styles.createTasks}>
      <h2 className={styles.titleCreateTask}>Create Tasks</h2>
      <form className={styles.Form}>
        <label htmlFor="">Task</label>
        <textarea
          placeholder="Insert your title..."
          className={styles.inputTitle}
        />
        <label htmlFor="">Description</label>
        <textarea
          placeholder="Insert your task..."
          className={styles.inputTask}
        />
        <button className={styles.saveTaskButton}>Save Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
