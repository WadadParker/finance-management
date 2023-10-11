import styles from "./table.module.css";

import React from 'react'

export const DataTable = ({list}) => {
  return (
<table className={styles.table}>
    <thead className={styles['heading-row']} key={"table"}>
        <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
        </tr>
    </thead>
    <tbody>
        {list.map(item =>
            (
                <tr key={item?._id}>
                    <td>{item?.category}</td>
                    <td>{item?.description}</td>
                    <td>{item?.amount}</td>
                </tr>
            ))}
    </tbody>
    </table>
  )
}
