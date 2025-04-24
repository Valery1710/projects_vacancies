import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CreateProject.module.css';
import Menu from '../Menu/Menu';
const CreateProject = () => {
  const [formData, setFormData] = useState({
    name: '',
    field: '',
    experience: '',
    deadline: '',
    description: '',
  });

  //Sent data from Form to backend
  const createProject = async (projectData) => {
    console.log('POST new project to backend')
    try {
      const response = await fetch('http://localhost:8080/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
       
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Created project:', data);
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };
  //**Sent data from Form to backend

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click form button');
    console.log(formData); // Выводим объект в консоль
    // updateProject(2, { name: 'Updated Project Name' });
    // createProject({ name: 'New Project' });
    
    createProject(formData);
    
  };

  return (
    <div className={styles.container}>
      <Menu />

      {/* Main Content */}
      <main className={styles.main}>
        <h2 className={styles.title}>Creating project</h2>

        <form className={styles.form} >
        {/* <form className={styles.form} onSubmit={handleSubmit}> */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Project name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label>Field</label>
              <select
                name="field"
                value={formData.field}
                onChange={handleChange}
              >
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
              <input
                type="text"
                name="experience"
                placeholder="Required experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
            <div className={styles.field}>
              <label>Deadline</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label>Description</label>
            <textarea
              name="description"
              rows="5"
              placeholder="Describe the project..."
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <Link to="/">
            <button  className={styles.submitButton} onClick={handleSubmit}>
            {/* <button type="submit" className={styles.submitButton} onClick={handleSubmit}> */}
              Create project
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default CreateProject;
