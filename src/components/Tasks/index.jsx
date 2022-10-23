import styles from "./Tasks.module.css";
import CreateTask from "../CreateTask";
import ShowTasks from "../ShowTasks";

const Tasks = () => {
  //const [list, setList] = useState([]);
  //const [newItem, setNewItem] = useState("");

  /*
  function addTask() {
    setList([...list, newItem]);
    setNewItem("");
  }

  function deleteTask(i) {
    let taskArray = [...list];
    taskArray.splice(i, 1);
  }
  */

  return (
    <div className={styles.tasks}>
      <CreateTask />
      <ShowTasks />
    </div>
  );
};

export default Tasks;
