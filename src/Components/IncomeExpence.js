import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';


export const IncomeExpence = () => {
  const {transactions} = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);

    return (
        <div className="income-expence">
        <div>
          <h3>Income</h3>
    <p className="plus">+${income}</p>
        </div>
        <div>
          <h3>Expense</h3>
    <p className="minus">-${expense}</p>
        </div>
      </div>
    )
}