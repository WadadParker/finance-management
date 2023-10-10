import styles from "./filterBar.module.css";

import React from 'react'

export const FilterBar = ({categories}) => {
  return (
    <fieldset>
        <legend>
            Filters
        </legend>
        <input type="checkbox" id="sort"/>
        <label htmlFor="sort">Sort by Amount</label>
        <select>
            <option value="">All Categories</option>
            {categories?.map(({category})=>
                (
                    <option value={category}>{category}</option>
                ))}
        </select>
    </fieldset>
  )
}
