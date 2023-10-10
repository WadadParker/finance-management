import styles from "./form.module.css";

import React from 'react'

export const IncomeExpenseForm = ({type}) => {
  return (
    <div className={styles.form}>
        <h2>Add {type}</h2>
        <input type="Number" placeholder="Amount" />
        <input placeholder="Category" />
        <textarea placeholder="Description" />
        <button className={styles.button}>Add New {type}</button>
    </div>
  )
}
