import styles from "./filterBar.module.css";

import React from 'react'

export const FilterBar = ({categories,filter,setFilter}) => {
  let allCategories=[];
  return (
    <fieldset>
        <legend>
            Filters
        </legend>
        <input className={styles.input} value={filter.sort} type="checkbox" id="sort" onChange={(e)=>setFilter(prev=>({...prev,sort:e.target.checked}))}/>
        <label htmlFor="sort">Sort by Amount</label>
        <select value={filter.category} onChange={(e)=>setFilter(prev=>({...prev,category:e.target.value}))}>
            <option value="">All Categories</option>
            {categories?.map(({category},index)=>
                {
                  if(!allCategories.includes(category))
                  {allCategories.push(category);
                  return(
                    <option value={category} key={index}>{category}</option>
                )}
                })}
        </select>
    </fieldset>
  )
}
