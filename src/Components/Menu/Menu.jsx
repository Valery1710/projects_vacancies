import React from 'react'
import { Link } from "react-router-dom";
import styles from './Menu.module.css'

function Menu() {
  return (
    <aside className={styles.sidebar}>
    <h2 className={styles.logo}>TROOD COMMUNITY</h2>
    <nav className={styles.nav}>
    <Link to="/">
      <button>Main Page</button>
      </Link>
      <Link to="/createproject">
      <button className={styles.active}>CreateProject</button>
      </Link>
      <button>Vacancies</button>
      <button>People</button>
      <button>Settings</button>
    </nav>
  </aside>
  )
}

export default Menu
