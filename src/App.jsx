import React from "react";
import {Route,Routes} from "react-router-dom";

import { SideBar } from "./components/sideBar/sideBar.jsx";
import { Home } from "./pages/home/Home.jsx";
import { Expense } from "./pages/expenses/Expense.jsx";
import { Income } from "./pages/income/Income.jsx";
import { Savings } from "./pages/savings/Savings.jsx";

function App() {

  return (
    <div className="app">
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/income" element={<Expense />}/>
        <Route path="/expenses" element={<Income />}/>
        <Route path="/savings" element={<Savings />}/>
      </Routes>
    </div>
  )
}

export default App
