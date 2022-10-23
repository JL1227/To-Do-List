import styles from "./Task.module.css";

const Task = ({ desc }) => {
  return (
    <div className={styles.Task}>
      <p>Tarefa</p>
      <p>Fazer a tarefa</p>
      <button className={styles.taskButton}>Deletar</button>
    </div>
  );
};

export default Task;
