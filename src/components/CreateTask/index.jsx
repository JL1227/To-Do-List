import styles from "./CreateTask.module.css";
import React, { useContext, useState } from "react";
import { Context } from "../Tasks";

const CreateTask = () => {

  const {newItem, setNewItem, addTask} = useContext(Context)

  return (
    <div className={styles.createTasks}>
      <h2 className={styles.titleCreateTask}>Create Tasks</h2>
      <form className={styles.Form}>
        <label htmlFor="">Description</label>
        <textarea
          placeholder="Insert your task..."
          className={styles.inputTask}
          value={newItem}
          onChange={(value) => setNewItem(value.target.value)}
        />
        <button type="button" className={styles.saveTaskButton} onClick={addTask}>Save Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
