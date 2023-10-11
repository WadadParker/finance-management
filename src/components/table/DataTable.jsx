import styles from "./table.module.css";

import React from 'react'

export const DataTable = ({list}) => {
  return (
    <table className={styles.table}>
        <tr className={styles[`heading-row`]}>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
        </tr>
        {list.map(item=>
            (
                <tr key={item?._id}>
                <td>{item?.category}</td>
                <td>{item?.description}</td>
                <td>{item?.amount}</td>
                </tr>
            ))}
    </table>
  )
}
