import styles from "./income.module.css";
import React, { useEffect } from 'react'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchIncome,addNewIncome } from "../../actions";

import { FilterBar } from "../../components/filterBar/FilterBar";
import { IncomeExpenseForm } from "../../components/form/IncomeExpenseForm";
import { DataTable } from "../../components/table/DataTable";

export const Income = () => {
  const income = useSelector((state)=>state.income)
  const dispatch = useDispatch();
  console.log(income);

  useEffect(()=>
  {
    dispatch(fetchIncome());
  },[dispatch])

  return (
    <div className={styles[`main-container`]}>
      <h1>Income</h1>
      <FilterBar categories={income}/>
      <section className={styles[`table-and-form`]}>
        <DataTable list={income}/>
        <IncomeExpenseForm type="Income" className={styles.form}/>
      </section>
    </div>
  )
}
