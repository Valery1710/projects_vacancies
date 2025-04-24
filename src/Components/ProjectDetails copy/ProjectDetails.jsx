import React, { useState } from 'react';
import styles from './ProjectDetails.module.css';
import Menu from '../Menu/Menu';
import projectsStore from '../../store/ProjectsStore';

const ProjectDetails = ({id}) => {
  const [field, setField] = useState(projectsStore.id);
  const [experience, setExperience] = useState('More 2 years');
  const [deadline, setDeadline] = useState('2024-11-22');
  const [description, setDescription] = useState(
    "We are looking for a creative and detail-oriented designer to develop eye-catching and engaging visual materials for our social media platforms. The goal is to create content that aligns with our brand identity and effectively captures our audience's attention."
  );
  // const [field, setField] = useState('Design');
  // const [experience, setExperience] = useState('More 2 years');
  // const [deadline, setDeadline] = useState('2024-11-22');
  // const [description, setDescription] = useState(
  //   "We are looking for a creative and detail-oriented designer to develop eye-catching and engaging visual materials for our social media platforms. The goal is to create content that aligns with our brand identity and effectively captures our audience's attention."
  // );

  const handleAddVacancy = () => {
    console.log('Вакансия добавлена!');
  };

  const handleDeleteProject = () => {
    console.log('Проект удалён!');
  };

  return (
    <div className={styles.container}>
      <Menu />


      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Creating visual materials for social media</h1>
          <button className={styles.deleteBtn} onClick={handleDeleteProject}>
            Delete project
          </button>
        </div>

        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Field</label>
              <select value={field} onChange={(e) => setField(e.target.value)}>
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Experience</label>
              <input
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Deadline</label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className={styles.addBtn} onClick={handleAddVacancy}>
            Add vacancy
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
