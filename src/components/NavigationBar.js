import React from 'react';
import styles from './NavigationBar.module.css';
import logo from './../media/logo.png'
import {Link} from "react-router-dom";

const NavigationBar = (props) => {
  return(
    <nav className={styles.mainNav}>
      <img className={styles.logo} src={logo} alt={"Helfy"}/>
      <ul>
        <li>
            <Link to={"/home"} className={styles.current}>
                Home
            </Link>
        </li>
        <li>
            <Link to={"/requests"}>
                Requests
            </Link>
        </li>
        <li>
            <Link to={"/history"}>
                History
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar;