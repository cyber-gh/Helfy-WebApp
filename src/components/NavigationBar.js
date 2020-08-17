import React from 'react';
import styles from './NavigationBar.module.css';
import logo from './../media/logo.png'
const NavigationBar = (props) => {
  return(
    <nav className={styles.mainNav}>
      <img className={styles.logo} src={logo} alt={"Helfy"}/>
      <ul>
        <li><a href={"/home"} className={styles.current}>Home</a></li>
        <li><a href={"/requests"}>Requests</a></li>
        <li><a href={"/history"}>History</a></li>
      </ul>
    </nav>
  )
}

export default NavigationBar;