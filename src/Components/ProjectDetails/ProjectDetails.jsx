import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './ProjectDetails.module.css';
import Menu from '../Menu/Menu';
import projectsStore from '../../store/ProjectsStore';
import projectSelected from '../../store/ProjectSelected';


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

const projectForDisplay = projectsStore.items.filter(el=>el.id === projectSelected.item)
// Внимание в projectForDisplay - Array с одним элементом - объектом с данными выбранного проекта
console.log('projectsStore.items',projectsStore.items)
  console.log('projectForDisplay',projectForDisplay)
  const handleAddVacancy = () => {
    console.log('Вакансия добавлена!');
  };

  const handleDeleteProject = () => {
    console.log('Проект удалён!');
    projectsStore.removeItem(projectSelected.item)

    // Удаление из бэкенда
    async function deleteProject(id) {
      try {
          const response = await fetch(`http://localhost:8080/projects/${projectSelected.item}`, {
              method: 'DELETE', // Указываем метод DELETE
              headers: {
                  'Content-Type': 'application/json' // Указываем тип контента
              }
          });
  
          if (!response.ok) {
              throw new Error(`Ошибка при удалении проекта: ${response.statusText}`);
          }
  
          console.log(`Проект с ID ${id} успешно удален.`);
      } catch (error) {
          console.error('Ошибка:', error);
      }
  }
  
  // Пример вызова функции
  deleteProject(2); // Замените 2 на ID проекта, который нужно удалить




    
  };

  return (
    <div className={styles.container}>
      <Menu />


      <main className={styles.main}>
        <div className={styles.header}>
          <h1>{projectForDisplay[0].name}</h1>
          <Link to='/'>
          <button className={styles.deleteBtn} onClick={handleDeleteProject}>
            Delete project
          </button>
          </Link>
        </div>

        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Field</label>
              <select value={field} onChange={(e) => setField(e.target.value)}>
                <option>{projectForDisplay[0].field} </option>
                <option>Development</option>
                <option>Marketing</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Experience</label>
              <input
                type="text"
                value={projectForDisplay[0].experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Deadline</label>
              <input
                type="date"
                value={projectForDisplay[0].deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Description</label>
            <textarea
              value={projectForDisplay[0].description}
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
