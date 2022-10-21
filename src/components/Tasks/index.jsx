import styles from "./Tasks.module.css";
import CreateTask from "../CreateTask";

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <CreateTask />
    </div>
  );
};

export default Tasks;
