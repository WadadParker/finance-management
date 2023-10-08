import styles from "./sideBar.module.css";

import React from 'react'
import {Link} from "react-router-dom";


export const SideBar = () => {
  return (
    <nav className={styles.navbar}>
        <li className={styles.list}>
          <Link className={styles.link} to="/">Home</Link>
        </li>
        <li className={styles.list}>
           <Link className={styles.link} to="/income"> Income</Link>
        </li>
        <li className={styles.list}>
           <Link className={styles.link} to="/expenses"> Expenses </Link>
        </li>
        <li className={styles.list}>
           <Link className={styles.link} to="/savings"> Savings </Link>
        </li>
        <li className={styles.list}>
            <a className={styles.link} href="https://github.com/WadadParker/finance-management" target="_blank">Github</a>
        </li>
    </nav>
  )
}
