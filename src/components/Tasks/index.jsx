import styles from "./Tasks.module.css";
import CreateTask from "../CreateTask";
import ShowTasks from "../ShowTasks";

const Tasks = () => {
  return (
    <div className={styles.tasks}>
      <CreateTask />
      <ShowTasks />
    </div>
  );
};

export default Tasks;
