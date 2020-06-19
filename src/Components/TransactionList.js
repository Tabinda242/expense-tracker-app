import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../Context/GlobalState';

export const TransactionList = () => {

const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3> History </h3>
            <hr />
            <ul className="list">
                {transactions.map(transactions => (<Transaction key={transactions.id} transactions={transactions} />))}
            </ul>
                
        </div>
    )
}