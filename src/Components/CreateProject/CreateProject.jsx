import React from "react";
import Menu from "../Menu/Menu";
import styles from "./CreateProject.module.css";

const CreateProject = () => {
  return (
    <div className={styles.wrapper}>
      
      <h2 className={styles.title}>Creating project</h2>
      
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>Name</label>
            <input type="text" placeholder="Project name" />
          </div>
          <div className={styles.field}>
            <label>Field</label>
            <select>
              <option value="">Select field</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Experience</label>
            <input type="text" placeholder="Required experience" />
          </div>
          <div className={styles.field}>
            <label>Deadline</label>
            <input type="date" />
          </div>
        </div>

        <div className={styles.field}>
          <label>Description</label>
          <textarea rows="5" placeholder="Describe the project..."></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Create project</button>
      </form>
    </div>
  );
};

export default CreateProject;