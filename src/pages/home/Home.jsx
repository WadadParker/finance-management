import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.css";

import React, { useEffect, useState } from 'react'

import { fetchIncome,fetchExpenses,fetchSavings } from "../../actions";
import { IncomeExpenseReport } from "../../components/incomeExpenseReport/IncomeExpenseReport";
import { ExpenseReport } from "../../components/expenseReport/ExpenseReport";

export const Home = () => {

  const [reportType,setReportType]= useState("income");
  const [showReport,setShowReport] = useState(false);

  const income = useSelector((state)=>state.income);
  const expenses = useSelector((state)=>state.expenses);
  const savings = useSelector((state)=>state.savings);
  const dispatch = useDispatch();

  const totalIncome = income?.reduce((acc,{amount})=>acc + amount,0);
  const totalExpense = expenses?.reduce((acc,{amount})=>acc + amount,0);
  const totalSavings = savings?.reduce((acc,{amount})=>acc + amount,0);

  const changeHandler=(option)=>
  {
    setReportType(option)
    setShowReport(false);
  }

  useEffect(()=>
  {
    dispatch(fetchIncome());
    dispatch(fetchExpenses());
    dispatch(fetchSavings());
  },[dispatch])

  return (
    <div>
      <h1>Finance Manager</h1>
      <section className={styles.container}>
        <label htmlFor="dropdown">Select Report Type:</label>
        <select value={reportType} id="dropdown" onChange={(e)=>changeHandler(e.target.value)}>
          <option value={"income"}>Income vs Expense</option>
          <option value={"expense"}>Expense Breakdown</option>
        </select>
        <button className={styles[`generate-report-button`]} onClick={()=>setShowReport(true)}>Generate Report</button>
      </section>

      {showReport && reportType==="income" && <IncomeExpenseReport totalIncome={totalIncome} totalExpense={totalExpense} totalSavings={totalSavings}/>}
      {showReport && reportType==="expense" &&<ExpenseReport expenses={expenses} totalExpense={totalExpense}/>}
    </div>
  )
}
