import styles from "./report.module.css";

import React from 'react'

export const IncomeExpenseReport = ({totalIncome,totalExpense,totalSavings}) => {
  return (
    <><h2 className={styles.heading}>Income vs Expense Report</h2>
    <div className={styles.container}>
        <section className={styles.section}>
            <b>Total Income</b>
            <span className={styles.income}>{totalIncome}</span>
        </section>
        <section className={styles.section}>
            <b>Total Expense</b>
            <span className={styles.expense}>{totalExpense}</span>
        </section>
        <section className={styles.section}>
            <b>Total Savings</b>
            <span className={styles.savings}>{totalSavings}</span>
        </section>
    </div>
    </>
  )
}
