import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Balance = () => {
    
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transactions => transactions.amount);
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);

    return (
        <div>
            <h3>Your Balance</h3>
            <h1>${total}</h1>
        </div>
    )
}