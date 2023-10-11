import styles from "./expenseReport.module.css";

import React from 'react'

export const ExpenseReport = ({expenses,totalExpense}) => {
  return (
    <>
    <h2>Expense Breakdown Report</h2>
    <table className={styles[`expense-table`]}>
        <thead className={styles['heading-row']} key={"expense-table"}>
            <th>Category</th>
            <th>Amount</th>
        </thead>
        <tbody>
                {expenses.map((item)=>
                (
                    <tr key={item?._id}>
                        <td>{item?.category}</td>
                        <td>{item?.amount}</td>
                    </tr>
                ))}
        </tbody>
        <tfoot>
            <tr>
                <td className={styles.total}>Total</td>
                <td>{totalExpense}</td>
            </tr>
        </tfoot>
    </table>
    </>
  )
}
