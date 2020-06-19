import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        if (String(text) === '') {
            alert("Please enter the text");
            return false;
        }

        if (Number(amount) === 0) {
            alert("Please enter the amount");
            return false;
        }

        const newTransaction = {
            id:Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
      addTransaction(newTransaction);
      setText('');
      setAmount('');
    }
    
    return (
        <div>
            <h3>Add New Transaction</h3>
            <hr />
            <form onSubmit={onSubmit}>
                <div>
                    <label className="Text">Text</label>
                    <br />
                    <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} 
                    placeholder="Enter text..." />
                </div>

                <div>
                    <label className="Text">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>

                <button className="button">Add Transaction</button>
            </form>
        </div>
    )
}