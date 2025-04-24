import React from 'react'
import { Link } from "react-router-dom";
import styles from './ProjectCard.module.css';
import projectSelected from '../../store/ProjectSelected';



const ProjectCard = ({ id,title, tasks, field }) => (
  <div className={styles.projectCard} onClick={() => projectSelected.addItem(id)}>
    <Link to="/projectdetails" >
    <h3>{title}</h3>
    <p>id {id}</p>
    <p>field {field}</p>
    <p>{tasks}</p>
    
    </Link>
  </div>
);


export default ProjectCard
